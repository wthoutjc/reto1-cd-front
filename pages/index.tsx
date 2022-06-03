import { useEffect, useCallback } from "react";
import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import type { NextPage } from "next";

// Components
import { Layout } from "../components/layout";
import { Sidebar } from "../components/ui";

// Redux
import { useAppDispatch } from "../hooks";
import { DBDataUsers, INotification } from "../interfaces";
import { newNotification } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";
import { CTable } from "../components/ui/table";

// Api
import { request } from "../api";

// Redux
import { useAppSelector } from "../hooks";

interface Props {
  data: DBDataUsers[];
}

const Home: NextPage<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector(state => state.ux);

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

  return (
    <>
      <Layout title={"Home - App"}>
        {sidebar.open && <Sidebar />}
        <Box className="index__container">
          <Box className="index__landing">
            {Array.isArray(data) && <CTable data={data || []}></CTable>}
          </Box>
          {/* <Box className="index__landing">
            <h1>Hola</h1>
          </Box> */}
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await request.get<DBDataUsers[] | null>("/data/covid");

  return {
    props: { data },
  };
};

export default Home;
