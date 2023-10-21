import React, { useEffect } from "react";
import { userTypeSelector } from "./store/hooks/useTypeSelector";
import { useAction } from "./store/hooks/useAction";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/AppStyled";

const App = () => {
  // const test = userTypeSelector(state => state.data)
  const { getData } = useAction();
  useEffect(() => {
    getData();
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <div>App</div>
    </Theme>
  );
};

export default App;
