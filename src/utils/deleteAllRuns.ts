import axios from "axios";
import { URL } from "./BaseURL";

export const deleteAllRuns = async () => {
  const response = await axios.delete(`${URL}/runs`);
  console.log(response.data);
};
