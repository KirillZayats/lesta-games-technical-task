import React, { useEffect, Suspense, lazy } from "react";
import { useAction } from "./store/hooks/useAction";
import { Theme } from "./styles/Theme";
import { ContainerProvider, GlobalStyle } from "./styles/AppStyled";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));

const Home = lazy(() => import("./pages/Home"));
const Contacts = lazy(() => import("./pages/Contacts"));

const App = () => {
  const { isLoading } = useSelector((state: any) => state.data);

  const { getData } = useAction();
  useEffect(() => {
    getData();
    console.log(isLoading);
    
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense
        fallback={
          // <ContainerLoader>
          //   <InfinitySpin width="200" color="#fff" />
          // </ContainerLoader>
          <div>Заглушка</div>
        }
      >
        {isLoading && (
          <ContainerProvider>
            <Header />
            <Routes>
              <Route path={`/`} element={<Home />} />
              <Route path={`/contacts`} element={<Contacts />} />
            </Routes>
            <Footer />
          </ContainerProvider>
        )}
      </Suspense>
    </Theme>
  );
};

export default App;
