import { useEffect, useState } from "react";
import getPeople from "../api/getPeople";
import swApi from "../api/swApi";
import { IPeople } from "../types/PeopleTypes";
import { ISpecies } from "../types/SpeciesTypes";

const usePersonData = (count: number) => {
  const [personData, setPersonData] = useState<IPeople>();

  const getData = async () => {
    const person = await getPeople(count);
    if (person?.status === 200) {
      const speciesUrl = person.species[0];

      if (speciesUrl) {
        const species = await swApi<ISpecies>(
          speciesUrl.substring(speciesUrl.lastIndexOf("api") + 3)
        );
        person.speciesName = species?.name;
      }

      setPersonData(person);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  return personData;
};

export default usePersonData;
