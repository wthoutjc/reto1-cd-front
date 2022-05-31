import { AppBar, Box, Icon, Link, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";

// Icons
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

// Redux
import { useAppDispatch } from "../../hooks";
import { turnOffRender } from "../../reducers";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const turnOffUxRender = () => {
    dispatch(turnOffRender());
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
