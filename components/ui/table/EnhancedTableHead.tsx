import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import React from "react";

// Interface
import { DBDataUsers } from "../../../interfaces";

type Order = "asc" | "desc";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DBDataUsers
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof DBDataUsers;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: "id_de_caso", numeric: false, disablePadding: true, label: "Caso" },
  { id: "fecha_reporte_web", numeric: false, disablePadding: true, label: "F. Reporte web" },
  { id: "fecha_de_notificaci_n", numeric: false, disablePadding: true, label: "F. Notificación" },
  { id: "departamento", numeric: true, disablePadding: true, label: "Departamento" },
  { id: "departamento_nom", numeric: false, disablePadding: true, label: "Nombre departamento" },
  { id: "ciudad_municipio", numeric: false, disablePadding: true, label: "Ciudad/Municipio" },
  { id: "ciudad_municipio_nom", numeric: false, disablePadding: true, label: "Nombre Ciudad/Municipio" },
  { id: "edad", numeric: true, disablePadding: true, label: "Edad" },
  { id: "unidad_medida", numeric: true, disablePadding: true, label: "Unidad medida" },
  { id: "sexo", numeric: false, disablePadding: true, label: "Sexo" },
  { id: "fuente_tipo_contagio", numeric: false, disablePadding: true, label: "Tipo de contagio" },
  { id: "ubicacion", numeric: false, disablePadding: true, label: "Ubicación" },
  { id: "estado", numeric: false, disablePadding: true, label: "Estado" },
  { id: "pais_viajo_1_cod", numeric: false, disablePadding: true, label: "Código viajó" },
  { id: "pais_viajo_1_nom", numeric: false, disablePadding: true, label: "Nombre viajó" },
  { id: "recuperado", numeric: false, disablePadding: true, label: "Recuperado" },
  { id: "fecha_inicio_sintomas", numeric: false, disablePadding: true, label: "F. Inicio síntomas" },
  { id: "fecha_diagnostico", numeric: false, disablePadding: true, label: "F. Diagnóstico" },
  { id: "fecha_recuperado", numeric: false, disablePadding: true, label: "F. Recuperado" },
  { id: "tipo_recuperacion", numeric: false, disablePadding: true, label: "Tipo recuperación" },
  { id: "per_etn_", numeric: false, disablePadding: true, label: "Per etn" },
  { id: "fecha_muerte", numeric: false, disablePadding: true, label: "F. Muerte" },
  { id: "nom_grupo_", numeric: false, disablePadding: true, label: "Nom grupo" },
];

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const {
    numSelected,
    onRequestSort,
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
  } = props;

  const createSortHandler =
    (property: keyof DBDataUsers) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding={"checkbox"}>
          <Checkbox
            color={"primary"}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "Select all",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { EnhancedTableHead };
