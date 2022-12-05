import { useContext } from "react";
import postRegister from "../../api/postRegister";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import GlobalContext from "../../context/GlobalContext";
import { FormResponseType } from "../../types/RegisterFormTypes";

export default function Register() {
  const { state } = useContext(GlobalContext);

  const registerHandler = async (formResponseData: FormResponseType) => {
    const registerData = {
      ...formResponseData,
      starWarsData: state.starWarsData,
    };

    await postRegister(registerData);
  };

  return <RegisterForm onSubmit={registerHandler} />;
}
