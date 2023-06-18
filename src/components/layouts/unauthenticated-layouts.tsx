import { useAuthContext } from "../../auth/auth-context";
import { Navigate, Outlet } from "react-router-dom";

export default function UnAuthenticatedLayouts() {
  const { token } = useAuthContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
