import { IVehicles } from "../types/VehiclesTypes";
import swApi from "./baseApi/swApi";

const getVehicles = async (id: number) => {
  const data = await swApi<IVehicles[]>(`/vehicles/${id}/`);

  return data;
};

export default getVehicles;
