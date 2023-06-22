import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { useAuthContext } from "../auth/auth-context";
import apiClient from "../api-client";
import { Alert } from "@mui/material";
import Header from "../components/header/header";
import { useCustomJs } from "../hooks/use-custom-js";
import { featureOnDevelopment } from "../utils";

export default function Login(): JSX.Element {
  useCustomJs();
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [errors, setErrors] = useState<any>(null);

  const { setUser, setToken } = useAuthContext();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Send signin request
    apiClient
      .post("/login", userData)
      .then(({ data }) => {
        setToken(data.data.token);
        setUser(data.data.user);
      })
      .catch(({ response }) => {
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  }

  return (
    <Container component="main" maxWidth="sm">
      <Header />
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {errors &&
            Object.keys(errors).map((key) => (
              <Alert
                key={Math.random()}
                severity="error"
                sx={{ marginBottom: "5px" }}
              >
                {errors[key]}
              </Alert>
            ))}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={featureOnDevelopment}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={NavLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
