import type { NextApiRequest, NextApiResponse } from "next";

//db
import axios from "axios";

// Interfaces
import { DBDataUsers } from "../../../interfaces";

enum Method {
  post = "POST",
  get = "GET",
  put = "PUT",
}

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://reto1-back.herokuapp.com/"
    : "http://127.0.0.1:5000/";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("A");

  const SETTINGS = {
    method: "GET",
    ContentType: "application/json",
  };

  const response = await axios.get<DBDataUsers[]>(baseUrl, SETTINGS);
  const { data } = response;

  return res.status(200).json(data);
};

export default handler;
