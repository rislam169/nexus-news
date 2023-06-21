import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createInitial } from "../utils";

export default function UserAvatar({
  name,
}: {
  name?: string | undefined;
}): JSX.Element {
  if (!name) {
    return (
      <Avatar>
        <AccountCircleIcon />
      </Avatar>
    );
  }

  return <Avatar>{createInitial(name)}</Avatar>;
}
