import axios from "axios";
import { BaseURL } from "./BaseURL";

export const getRunningData = async () => {
  try {
    const response = await axios.get(`${BaseURL}/runs`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
