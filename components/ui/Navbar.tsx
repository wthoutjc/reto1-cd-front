import { AppBar, Box, Icon, IconButton, Link, Toolbar, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";

// Icons
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloseIcon from '@mui/icons-material/Close';

// Redux
import { useAppDispatch, useAppSelector } from "../../hooks";
import { turnOffRender, toggleSidebar } from "../../reducers";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector(state=>state.ux)

  const { open } = sidebar

  const turnOffUxRender = () => {
    dispatch(turnOffRender());
  };

  const handleOpenSideBar = () => {
    dispatch(toggleSidebar());
  }

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
        <Box>
          <Tooltip title='Búsqueda avanzada'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenSideBar}
            >
              {open ? <CloseIcon /> : <ManageSearchIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
