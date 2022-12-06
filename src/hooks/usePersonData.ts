import { useEffect, useState } from "react";
import getPeople from "../api/getPeople";
import { IPeople } from "../types/PeopleTypes";
import { ISpecies } from "../types/SpeciesTypes";
import fetchApi from "../api/baseApi/fetchApi";

const usePersonData = (count: number) => {
  const [personData, setPersonData] = useState<IPeople>();

  const getData = async () => {
    const res = await getPeople(count);

    if (res?.status === 200) {
      const speciesUrl = res.data.species[0];

      if (speciesUrl) {
        const resp = await fetchApi<ISpecies>(speciesUrl);
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
