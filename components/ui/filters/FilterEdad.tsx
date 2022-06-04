import { Box, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Redux
import { useAppDispatch } from "../../../hooks";
import { setFilter } from "../../../reducers";

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;

const FilterEdad = () => {
  const dispatch = useAppDispatch();

  const [edad, setEdad] = useState<number[]>([20, 37]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setEdad([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setEdad([clamped - minDistance, clamped]);
      }
    } else {
      setEdad(newValue as number[]);
    }
  };

  useEffect(() => {
    dispatch(
      setFilter({
        current: null,
        option: "Edad",
        value: edad,
      })
    );
  }, [dispatch, edad]);

  return (
    <Box>
      <Typography variant="body1">
        {edad[0]} - {edad[1]}
      </Typography>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={edad}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
};

export { FilterEdad };
