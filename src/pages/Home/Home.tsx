import { useState } from "react";
import NextProfileBtn from "../../components/NextProfileBtn/NextProfileBtn";
import PersonProfile from "../../components/PersonProfile/PersonProfile";
import useCreateStarWarsData from "../../hooks/getStarWarsData";
import usePersonData from "../../hooks/usePersonData";

export default function Home() {
  const [count, setCount] = useState(1);
  const personData = usePersonData(count);
  useCreateStarWarsData(personData);

  const handleNextProfileClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <PersonProfile personData={personData} />
      <NextProfileBtn onClick={handleNextProfileClick} />
    </>
  );
}
