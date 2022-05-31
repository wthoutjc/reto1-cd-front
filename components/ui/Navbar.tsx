import { AppBar, Box, Icon, Link, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

// Redux
import { useAppDispatch, useAppSelector } from "../../hooks";
import { turnOffRender, openSidebar, closeSidebar } from "../../reducers";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const { sidebar } = useAppSelector((state) => state.ux);

  const turnOffUxRender = () => {
    dispatch(turnOffRender());
  };

  const handleOpenSideBar = () => {
    dispatch(openSidebar());
  };

  const handleCloseSideBar = () => {
    dispatch(closeSidebar());
  };

  return (
    <AppBar position={"static"} elevation={0} className="navbar__appbar">
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Icon sx={{ marginRight: 1 }}>
            <CoronavirusIcon />
          </Icon>
          {sidebar.open ? (
            <Icon
              sx={{ marginRight: 1, cursor: "pointer" }}
              onClick={handleCloseSideBar}
            >
              <CloseIcon />
            </Icon>
          ) : (
            <Icon
              sx={{ marginRight: 1, cursor: "pointer" }}
              onClick={handleOpenSideBar}
            >
              <MenuIcon />
            </Icon>
          )}
          <NextLink href="/" passHref>
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              onClick={turnOffUxRender}
            >
              <Typography
                variant="h6"
                sx={{ userSelect: "none", cursor: "pointer" }}
              >
                COVID-19
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
