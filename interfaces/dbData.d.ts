type Sexo = 'F' | 'M' | string;

export interface DBDataUsers {
    id_de_caso: string,
    fecha_reporte_web: string,
    fecha_de_notificacion: string,
    departamento: number,
    departamento_nom: string,
    ciudad_municipio: number,
    ciudad_municipio_nom: string,
    edad: number,
    unidad_medida: number,
    sexo: Sexo,
    ciudad_municipio_nom: string,
    fuente_tipo_contagio: string,
    ubicacion: string,
    estado: string,
    pais_viajo_1_cod: string,
    pais_viajo_1_nom: string,
    recuperado: string,
    fecha_inicio_sintomas: string,
    fecha_diagnostico: string,
    fecha_recuperado: string,
    tipo_recuperacion: string,
    per_etn_: string,
    fecha_muerte: string,
    nom_grupo_: string,
}