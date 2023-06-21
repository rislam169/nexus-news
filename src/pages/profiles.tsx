import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { User } from "../auth/auth-context";
import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { createInitial, stringToArray } from "../utils";
import {
  Alert,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Categories } from "../components/feed/category/categories";
import Header from "../components/header/header";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Message = {
  /** Type of the message error, success, warning */
  type: "success" | "info" | "warning" | "error";

  /** Displayed message after form submit */
  texts: string[];
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link component={NavLink} color="inherit" to="/">
        Nexus News
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [sources, setSources] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string>("");
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!user) {
      apiClient.get("user/details").then(({ data: response }) => {
        if (response.status === "success") {
          setUser(response.data.user);
          console.log();
          if (response.data.userSetting) {
            setSources(response.data.userSetting.source.toString());
            setSelectedCategory(response.data.userSetting.category);
            setAuthors(response.data.userSetting.author.toString());
          }
        }
      });
    }
  });

  /** Render profile avatar */
  function renderAvatar(): string | JSX.Element {
    if (user && user.name) {
      return createInitial(user.name);
    }

    return <AccountCircleIcon />;
  }

  function handleCategoryChange(
    event: SelectChangeEvent<typeof selectedCategory>
  ) {
    const {
      target: { value },
    } = event;
    setSelectedCategory(
      // On autofill found an stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  }

  function handleCategoryDelete(event: MouseEvent, value: string): void {
    event.preventDefault();
    setSelectedCategory((persons) =>
      persons.filter((person) => person !== value)
    );
  }

  function onSaveSettings(): void {
    const sourceArray = stringToArray(sources, ",");
    const authorArray = stringToArray(authors, ",");

    apiClient
      .post("user/settings", {
        categories: selectedCategory,
        sources: sourceArray,
        authors: authorArray,
      })
      .then(({ data: response }) => {
        setMessage({ type: response.type, texts: [response.message] });
      })
      .catch(({ response }) => {
        setMessage({ type: "error", texts: response.data.errors });
      });
  }

  return (
    <Container component="main" maxWidth="md">
      <Header />
      <CssBaseline />
      <Box
        paddingX="10px"
        sx={{
          boxShadow: 3,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>{renderAvatar()}</Avatar>
        <Typography component="h1" variant="h5">
          {user?.name}
        </Typography>
        <Typography variant="body1" marginBottom="2em">
          {user?.email}
        </Typography>

        <Divider variant="middle" sx={{ width: "100%", margin: "3" }} />

        <Typography variant="h5" fontWeight="bold" marginTop="2em">
          Personilzed Newa Feed Setting
        </Typography>

        {message &&
          Object.values(message.texts).map((text) => (
            <Alert
              key={Math.random()}
              severity={message.type}
              sx={{ marginTop: "5px" }}
            >
              {text}
            </Alert>
          ))}

        <Box
          maxWidth="sm"
          component="div"
          marginTop="2em"
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{ width: "100%" }}
        >
          <FormControl>
            <TextField
              label="Source"
              variant="outlined"
              helperText="Eg. The Gurdian,The New York Times"
              value={sources}
              onChange={({ target }) => setSources(target.value)}
            />
          </FormControl>

          <FormControl>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              multiple
              label="Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              input={
                <OutlinedInput label="Category" placeholder="Select Category" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleCategoryDelete(e, value)}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {Categories.map((category) => (
                <MenuItem key={category.title} value={category.title}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              label="Authors"
              variant="outlined"
              helperText="Eg. Jonathan Abrams,Tariq Panja"
              value={authors}
              onChange={({ target }) => setAuthors(target.value)}
            />
          </FormControl>
          <Button
            type="button"
            onClick={onSaveSettings}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Settings
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
