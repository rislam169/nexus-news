import { useAuthContext } from "../../auth/auth-context";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedLayouts() {
  const { user, token } = useAuthContext();

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}