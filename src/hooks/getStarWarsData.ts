import { useContext, useEffect } from "react";
import swApi from "../api/baseApi/swApi";
import GlobalContext from "../context/GlobalContext";
import { IPeople } from "../types/PeopleTypes";
import { IVehicles } from "../types/VehiclesTypes";

const useCreateStarWarsData = (personData: IPeople | undefined) => {
  const { dispatch } = useContext(GlobalContext);

  const addStarWarsDataToGlobalContext = async () => {
    if (personData) {
      const vehiclesPromise = personData.vehicles.map(async (vehiclesUrl) => {
        const res = await swApi<IVehicles>(
          vehiclesUrl.substring(vehiclesUrl.lastIndexOf("api") + 3)
        );
        return res?.data;
      });

      Promise.all(vehiclesPromise).then((vehicles) => {
        dispatch({
          type: "addStarWarsData",
          starWarsData: {
            name: personData.name,
            created: personData.created,
            vehicles: vehicles as IVehicles[],
          },
        });
      });
    }
  };

  useEffect(() => {
    if (personData) addStarWarsDataToGlobalContext();
  }, [personData]);
};

export default useCreateStarWarsData;
