import { useContext, useEffect } from "react";
import swApi from "../api/baseApi/swApi";
import GlobalContext from "../context/GlobalContext";
import { IPeople } from "../types/PeopleTypes";
import { IVehicles } from "../types/VehiclesTypes";

const useCreateStarWarsData = (personData: IPeople | undefined) => {
  const { dispatch } = useContext(GlobalContext);

  const addStarWarsDataToGlobalContext = () => {
    if (personData) {
      personData.vehicles.forEach(async (vehiclesUrl) => {
        const res = await swApi<IVehicles[]>(
          vehiclesUrl.substring(vehiclesUrl.lastIndexOf("api") + 3)
        );

        if (res?.data) {
          dispatch({
            type: "addStarWarsData",
            starWarsData: {
              name: personData.name,
              created: personData.created,
              vehicles: res.data,
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    if (personData) addStarWarsDataToGlobalContext();
  }, [personData]);
};

export default useCreateStarWarsData;
