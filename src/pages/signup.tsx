import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import apiClient from "../api-client";
import { useAuthContext } from "../auth/auth-context";
import { Alert } from "@mui/material";
import Header from "../components/header/header";

export default function Signup(): JSX.Element {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordConfirmationRef =
    useRef() as MutableRefObject<HTMLInputElement>;
  const [errors, setErrors] = useState<any>(null);

  const { setUser, setToken } = useAuthContext();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    // Send signup request
    apiClient
      .post("/signup", userData)
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
          Sign up
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
            id="name"
            label="Full Name"
            autoComplete="name"
            autoFocus
            inputRef={nameRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
            inputRef={passwordConfirmationRef}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link component={NavLink} to="/signin" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
