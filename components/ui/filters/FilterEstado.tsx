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

type TipoEstado = "Leve" | "Fallecido" | "N/A";

const FilterEstado = () => {
  const dispatch = useAppDispatch();

  const [estado, setEstado] = useState<TipoEstado>("Leve");

  const toggleTipoRecuperacion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEstado(event.target.value as TipoEstado);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        current: null,
        option: 'Estado',
        value: estado,
      })
    );
  }, [dispatch, estado]);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={estado}
        name="radio-buttons-group"
        onChange={toggleTipoRecuperacion}
      >
        <FormControlLabel value="Leve" control={<Radio />} label="Leve" />
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

export { FilterEstado };
