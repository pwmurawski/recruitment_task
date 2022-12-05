import { useEffect, useState } from "react";
import getPeople from "../api/getPeople";
import swApi from "../api/baseApi/swApi";
import { IPeople } from "../types/PeopleTypes";
import { ISpecies } from "../types/SpeciesTypes";

const usePersonData = (count: number) => {
  const [personData, setPersonData] = useState<IPeople>();

  const getData = async () => {
    const res = await getPeople(count);
    if (res?.data) {
      const speciesUrl = res.data.species[0];

      if (speciesUrl) {
        const resp = await swApi<ISpecies>(
          speciesUrl.substring(speciesUrl.lastIndexOf("api") + 3)
        );
        res.data.speciesName = resp?.data?.name;
      }

      setPersonData(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  return personData;
};

export default usePersonData;
