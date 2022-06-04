import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";

// Redux
import { useAppDispatch } from "../../../hooks";
import { setFilter } from "../../../reducers";

type TipoRecuperacion = "Tiempo" | "PCR";

const FilterTipoRecuperacion = () => {
  const dispatch = useAppDispatch();

  const [tipoRecuperacion, setTipoRecuperacion] =
    useState<TipoRecuperacion>("Tiempo");

  const toggleTipoRecuperacion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTipoRecuperacion(event.target.value as TipoRecuperacion);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        current: null,
        option: "Tipo de recuperación",
        value: tipoRecuperacion,
      })
    );
  }, [dispatch, tipoRecuperacion]);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={tipoRecuperacion}
        name="radio-buttons-group"
        onChange={toggleTipoRecuperacion}
      >
        <FormControlLabel value="Tiempo" control={<Radio />} label="Tiempo" />
        <FormControlLabel value="PCR" control={<Radio />} label="PCR" />
      </RadioGroup>
    </FormControl>
  );
};

export { FilterTipoRecuperacion };
