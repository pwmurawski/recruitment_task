import { IPeople } from "../types/PeopleTypes";
import swApi from "./swApi";

const getPeople = async (id: number) => {
  const data = await swApi<IPeople>(`/people/${id}/`);

  return data;
};

export default getPeople;
