import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Drawer,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  capitalize,
} from "@mui/material";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { toggleSidebar } from "../../../reducers";

//Components
import { SearchLayout } from "../../layout";
import {
  FilterEdad,
  FilterEstado,
  FilterSexo,
  FilterTipoRecuperacion,
  FilterUbicacion,
} from "../../ui/filters";

const drawerWidth = 300;

interface Props {
  window?: () => Window;
}

export function Sidebar(props: Props) {
  const [filter, setFilter] = useState({
    title: "",
    subheader: "",
    option: "",
  });

  const dispatch = useAppDispatch();

  const { sidebar } = useAppSelector((state) => state.ux);
  const { open } = sidebar;

  const { window } = props;

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleChange = (event: SelectChangeEvent) => {
    switch (event.target.value) {
      case "edad":
        return setFilter({
          title: "Edad",
          subheader: "Seleccione un rango de edad",
          option: event.target.value,
        });
      case "sexo":
        return setFilter({
          title: "Sexo",
          subheader: "Seleccione un sexo",
          option: event.target.value,
        });
      case "estado":
        return setFilter({
          title: "Estado",
          subheader: "Seleccione un estado",
          option: event.target.value,
        });
      case "tipo_recuperacion":
        return setFilter({
          title: "Tipo de recuperación",
          subheader: "Seleccione un tipo de recuperación",
          option: event.target.value,
        });
      case "ubicacion":
        return setFilter({
          title: "Ubicación",
          subheader: "Seleccione una ubicación",
          option: event.target.value,
        });
      default:
        return setFilter({
          title: "",
          subheader: "",
          option: event.target.value,
        });
    }
  };

  const drawer = (
    <Box sx={{ padding: 1 }}>
      <Typography variant="body1" sx={{ padding: "1em" }}>
        Búsqueda avanzada
      </Typography>
      <Divider />
      <Card
        sx={{ width: "100%", padding: "0.1em", marginTop: 1, marginBottom: 1 }}
        variant="outlined"
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Selecciona una opción
          </Typography>
          <FormControl size="small">
            <Select
              labelId="name-filter"
              id="name-filter-select"
              value={filter.option}
              displayEmpty
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography variant="body1">Seleccione</Typography>
              </MenuItem>
              <MenuItem value="edad">
                <Typography variant="body1">Edad</Typography>
              </MenuItem>
              <MenuItem value="tipo_recuperacion">
                <Typography variant="body1">Tipo de recuperación</Typography>
              </MenuItem>
              <MenuItem value="estado">
                <Typography variant="body1">Estado</Typography>
              </MenuItem>
              <MenuItem value="ubicacion">
                <Typography variant="body1">Ubicación</Typography>
              </MenuItem>
              <MenuItem value="sexo">
                <Typography variant="body1">Sexo</Typography>
              </MenuItem>
            </Select>
            <FormHelperText>Opción de filtro: datos COVID-19.</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
      <Divider />
      {filter.title && (
        <>
          <SearchLayout
            title={capitalize(filter.title)}
            subheader={filter.subheader}
            handleDrawerToggle={handleDrawerToggle}
          >
            {filter.title === "Edad" && <FilterEdad />}
            {filter.title === "Tipo de recuperación" && (
              <FilterTipoRecuperacion />
            )}
            {filter.title === "Estado" && <FilterEstado />}
            {filter.title === "Ubicación" && <FilterUbicacion />}
            {filter.title === "Sexo" && <FilterSexo />}
          </SearchLayout>
        </>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ position: "absolute", width: "100%", height: "100%", zIndex: 10 }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
      <Box className="sidebar__main" onClick={handleDrawerToggle} />
    </Box>
  );
}
