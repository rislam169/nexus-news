import { Box, Container, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: "55%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          The page you are looking for is not available
        </Typography>
        <Link component={NavLink} to="/signin" variant="h5">
          Home
        </Link>
      </Box>
    </Container>
  );
}
