import type { NextApiRequest, NextApiResponse } from "next";

//db
import axios from "axios";

enum Method {
  post = "POST",
  get = "GET",
  put = "PUT",
}

const baseUrl = process.env.BACK_URL!;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case Method.get: {
        const { data } = await axios.get<string>(baseUrl);
        return res.status(200).json(eval(data));
      }
      case Method.post: {
        const { filter } = req.body;
        const { current, value } = filter;

        const { data } = await axios.post<string>(baseUrl, {
          filtro: current,
          valor: value,
        });

        return res.status(200).json(eval(data));
      }
      default:
        res.status(404).json({ error: "Method not found" });
        break;
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

export default handler;
