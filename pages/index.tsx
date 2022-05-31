import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import type { NextPage } from "next";

// Components
import { Layout } from "../components/layout";

// Redux
import { useAppDispatch } from "../hooks";
import { DBDataUsers, INotification } from "../interfaces";
import { newNotification } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";
import { CTable } from "../components/ui/table";

// Api
import { request } from "../api";

interface Props {
  data: DBDataUsers[];
}

const Home: NextPage<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleNotification = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Success:",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur?",
      severity: "error",
    };
    dispatch(newNotification(payload));
  };

  return (
    <>
      <Layout title={"Home - App"}>
        <Box className="index__container">
          <Box className="index__landing">
            <CTable data={data}></CTable>
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
  const { data } = await request.get<DBDataUsers[]>("/data/covid");

  return {
    props: { ok: true, data },
  };
};

export default Home;
