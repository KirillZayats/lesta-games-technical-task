import { useEffect, Suspense, lazy } from "react";
import { useAction } from "./hooks/useAction";
import { Theme } from "./styles/Theme";
import {
  ContainerLoader,
  ContainerProvider,
  GlobalStyle,
} from "./styles/AppStyled";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Blocks } from "react-loader-spinner";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));

const Home = lazy(() => import("./pages/Home"));
const Contacts = lazy(() => import("./pages/Contacts"));
const DownUp = lazy(() => import("./components/DownUp"));
const Error = lazy(() => import("./pages/Error"));

const App = () => {
  const { isLoading, errorMessage } = useSelector((state: any) => state.data);

  const { getData } = useAction();
  useEffect(() => {
    getData();
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense
        fallback={
          <ContainerLoader>
            <Blocks
              visible={true}
              height="200"
              width="200"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </ContainerLoader>
        }
      >
        {isLoading && (
          <ContainerProvider>
            <Header />
            <Routes>
              <Route path={`/`} element={<Home />} />
              <Route path={`/contacts`} element={<Contacts />} />
              <Route path={`/*`} element={<Error errorMessage=''/>} />
            </Routes>
            <Footer />
            <DownUp />
          </ContainerProvider>
        )}
      </Suspense>
    </Theme>
  );
};

export default App;
