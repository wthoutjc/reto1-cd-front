import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

// Icons
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// Cookies
import Cookies from "js-cookie";

// Redux
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setFilter } from "../../reducers";

interface Props {
  title?: string;
  subheader?: string;
  children?: React.ReactNode;
  handleDrawerToggle: () => void;
}

const SearchLayout = ({
  title,
  subheader,
  children,
  handleDrawerToggle,
}: Props) => {
  const dispatch = useAppDispatch();
  const { option, value } = useAppSelector((state) => state.filter);

  const handleSetFilter = () => {
    dispatch(setFilter({ current: option, option, value }));
    Cookies.set("filter_cd_covid_19", JSON.stringify({ current:option, option, value }));
    handleDrawerToggle();
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{ width: "100%", mt: 1, mb: 1 }}
    >
      <Card sx={{ width: "100%" }} variant="outlined">
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Box>{children}</Box>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            endIcon={<FilterAltOutlinedIcon />}
            onClick={handleSetFilter}
          >
            Aplicar filtro
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export { SearchLayout };
