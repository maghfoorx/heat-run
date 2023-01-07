import axios from "axios";
import { URL } from "./URL";

export const getRunningData = async () => {
  try {
    const response = await axios.get(`${URL}/runs`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
