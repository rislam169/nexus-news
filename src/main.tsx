import ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { AuthProvider } from "./auth/auth-provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
