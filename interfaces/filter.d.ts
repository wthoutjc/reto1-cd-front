type OptionsFilters = "Edad" | "Tipo de recuperación" | "Estado" | "Ubicación" | "Sexo";

export interface Filter {
  current: OptionsFilters | null;
  option: OptionsFilters | null;
  value: number[] | string | null;
}
