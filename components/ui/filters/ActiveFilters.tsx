import { Box, Chip } from "@mui/material";
import { useRouter } from "next/router";

// Redux
import { useAppDispatch } from "../../../hooks";
import { resetFilter } from "../../../reducers";

// Cookies
import Cookies from "js-cookie";

// Interfaces
import { OptionsFilters } from "../../../interfaces";

const ActiveFilters = ({
  current,
  value,
}: {
  current: OptionsFilters | null;
  value: string | number[] | null;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteFilter = () => {
    dispatch(resetFilter());
    Cookies.remove("filter_cd_covid_19");
    router.push('/')
  };

  return (
    <Box display={"flex"} alignItems="center" sx={{ width: "100%", p: 1 }}>
      <Chip
        label={`${current}: ${value}`}
        variant="outlined"
        onDelete={handleDeleteFilter}
      />
    </Box>
  );
};

export default ActiveFilters;
