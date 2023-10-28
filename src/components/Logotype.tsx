import React from "react";
import {
  NameLogotypeStyle,
  Iconlogotype,
  LogotypeStyle,
  LinkStyle,
} from "../styles/header/LogotypeStyled";
import { useAction } from "../hooks/useAction";

const Logotype = () => {
  const { setUrl } = useAction();

  return (
    <LinkStyle to={"/"} onClick={() => setUrl('/')}>
      <LogotypeStyle>
        <Iconlogotype />
        <NameLogotypeStyle>Lesta Games</NameLogotypeStyle>
      </LogotypeStyle>
    </LinkStyle>
  );
};

export default Logotype;
