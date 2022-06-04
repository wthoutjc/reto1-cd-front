import { useEffect, useCallback } from "react";
import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import type { NextPage } from "next";

// Components
import { Layout } from "../components/layout";
import { Sidebar } from "../components/ui";
import ActiveFilters from "../components/ui/filters/ActiveFilters";

// Redux
import { useAppDispatch, useAppSelector } from "../hooks";
import { DBDataUsers, INotification } from "../interfaces";
import { newNotification, setFilter } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";
import { CTable } from "../components/ui/table";

// Api
import axios from "axios";

type OptionsFilters =
  | "Edad"
  | "Tipo de recuperación"
  | "Estado"
  | "Ubicación"
  | "Sexo";

interface Props {
  data: DBDataUsers[];
  filter: {
    current: OptionsFilters | null;
    option: OptionsFilters | null;
    value: string | number[] | null;
  };
}

const Home: NextPage<Props> = ({ data, filter }) => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector((state) => state.ux);
  const { current, value } = useAppSelector((state) => state.filter);

  const handleNotification = useCallback(
    ({ title, message }: { title: string; message: string }) => {
      const payload: INotification = {
        id: uuid(),
        title,
        message,
        severity: "error",
      };
      dispatch(newNotification(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!data) {
      const title = "Error:";
      const message = "Hubo un error cargando los datos.";
      handleNotification({ title, message });
    }
  }, [data, handleNotification]);

  useEffect(() => {
    if (filter) {
      dispatch(setFilter(filter));
    }
  }, [filter, dispatch]);

  return (
    <Layout title={"Home - App"}>
      {sidebar.open && <Sidebar />}
      <Box className="index__container">
        <Box className="index__landing">
          {current && <ActiveFilters current={current} value={value} />}
          {Array.isArray(data) && data.length > 0 && (
            <CTable data={data || []}></CTable>
          )}
        </Box>
        {/* <Box className="index__landing">
            <h1>Hola</h1>
          </Box> */}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps({ req }: any) {
  const baseUrl = process.env.BACK_URL!;

  const { filter_cd_covid_19 } = req.cookies;
  const filter = filter_cd_covid_19 ? JSON.parse(filter_cd_covid_19) : null;

  const { current, value } = filter || { current: null, value: null };

  const { data } = filter
    ? await axios.post<string>(baseUrl, {
        filtro: current,
        valor: value,
      })
    : await axios.get<string>(baseUrl);

  const response = await eval(data);

  return {
    props: {
      data: response,
      filter,
    },
  };
}

export default Home;
