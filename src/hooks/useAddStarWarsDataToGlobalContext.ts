import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import getVehiclesForPerson from "../helpers/getVehiclesForPerson";
import { IPeople } from "../types/PeopleTypes";

const useAddStarWarsDataToGlobalContext = (personData: IPeople | undefined) => {
  const { dispatch } = useContext(GlobalContext);

  const addStarWarsDataToGlobalContext = async () => {
    if (personData) {
      const vehicles = await getVehiclesForPerson(personData);

      dispatch({
        type: "addStarWarsData",
        starWarsData: {
          name: personData.name,
          created: personData.created,
          vehicles,
        },
      });
    }
  };

  useEffect(() => {
    addStarWarsDataToGlobalContext();
  }, [personData]);
};

export default useAddStarWarsDataToGlobalContext;
