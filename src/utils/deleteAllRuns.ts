import axios from "axios";
import { BaseURL } from "./BaseURL";

export const deleteAllRuns = async () => {
  const response = await axios.delete(`${BaseURL}/runs`);
  console.log(response.data);
};
