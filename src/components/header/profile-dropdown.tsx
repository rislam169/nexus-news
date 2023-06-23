import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import UserAvatar from "../user-avatar";
import { Logout } from "@mui/icons-material";
import { useAuthContext } from "../../auth/auth-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileDropdown() {
  const { user, token, logout } = useAuthContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function onDropdownItemClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  function navigateTo(to: string): void {
    handleClose();
    navigate(to);
  }

  function userLogout(): void {
    handleClose();
    logout();
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Profile settings">
          <IconButton
            onClick={onDropdownItemClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <UserAvatar name={user?.name} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {token && (
          <>
            <MenuItem onClick={() => navigateTo("/profile")}>
              <UserAvatar /> Profile
            </MenuItem>
            <MenuItem onClick={userLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        )}
        {!token && (
          <MenuItem onClick={() => navigateTo("/login")}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
