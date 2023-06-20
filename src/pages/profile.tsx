import { Button } from "@mui/material";
import { useAuthContext } from "../auth/auth-context";

export default function Profile() {
  const { logout } = useAuthContext();
  return (
    <div>
      <p>This is Profile page which is login protected </p>
      <Button variant="text" onClick={logout}>
        Log out
      </Button>
    </div>
  );
}
