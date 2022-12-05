import { Route, Routes } from "react-router-dom";
import HomeHeader from "./components/headers/HomeHeader/HomeHeader";
import Layout from "./components/Layout/Layout";
import RegisterHeader from "./components/headers/RegisterHeader/RegisterHeader";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import GlobalContextProvider from "./providers/GlobalContextProvider";

export default function App() {
  return (
    <GlobalContextProvider>
      <Layout
        header={
          <Routes>
            <Route path="*" element={<HomeHeader />} />
            <Route path="/register" element={<RegisterHeader />} />
          </Routes>
        }
        main={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        }
      />
    </GlobalContextProvider>
  );
}
