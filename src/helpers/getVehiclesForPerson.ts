import fetchApi from "../api/baseApi/fetchApi";
import { IPeople } from "../types/PeopleTypes";
import { IVehicles } from "../types/VehiclesTypes";

const getVehiclesForPerson = async (personData: IPeople) => {
  const vehiclesPromises = personData.vehicles.map((vehiclesUrl) =>
    fetchApi<IVehicles>(vehiclesUrl)
  );

  const vehiclesResponses = await Promise.all(vehiclesPromises);
  const vehicles = vehiclesResponses.map((response) => response?.data);

  return vehicles as IVehicles[];
};

export default getVehiclesForPerson;
