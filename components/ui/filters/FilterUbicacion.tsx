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

type TipoUbicacion = "Casa" | "Fallecido" | "N/A";

const FilterUbicacion = () => {
  const dispatch = useAppDispatch();

  const [ubicacion, setUbicacion] = useState<TipoUbicacion>("Casa");

  const toggleTipoRecuperacion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUbicacion(event.target.value as TipoUbicacion);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        current: null,
        option: "Ubicación",
        value: ubicacion,
      })
    );
  }, [dispatch, ubicacion]);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={ubicacion}
        name="radio-buttons-group"
        onChange={toggleTipoRecuperacion}
      >
        <FormControlLabel value="Casa" control={<Radio />} label="Casa" />
        <FormControlLabel
          value="Fallecido"
          control={<Radio />}
          label="Fallecido"
        />
        <FormControlLabel value="N/A" control={<Radio />} label="N/A" />
      </RadioGroup>
    </FormControl>
  );
};

export { FilterUbicacion };
