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

type TipoSexo = "F" | "M";

const FilterSexo = () => {
  const dispatch = useAppDispatch();

  const [sexo, setSexo] = useState<TipoSexo>("F");

  const toggleTipoRecuperacion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSexo(event.target.value as TipoSexo);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        current: null,
        option: "Sexo",
        value: sexo,
      })
    );
  }, [dispatch, sexo]);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={sexo}
        name="radio-buttons-group"
        onChange={toggleTipoRecuperacion}
      >
        <FormControlLabel value="F" control={<Radio />} label="Femenino" />
        <FormControlLabel value="M" control={<Radio />} label="Masculino" />
      </RadioGroup>
    </FormControl>
  );
};

export { FilterSexo };
