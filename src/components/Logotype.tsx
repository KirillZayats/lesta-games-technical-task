import React from "react";
import {
  NameLogotypeStyle,
  Iconlogotype,
  LogotypeStyle,
  LinkStyle,
} from "../styles/header/LogotypeStyled";

const Logotype = () => {
  return (
    <LinkStyle to={"/"}>
      <LogotypeStyle>
        <Iconlogotype />
        <NameLogotypeStyle>Lesta Games</NameLogotypeStyle>
      </LogotypeStyle>
    </LinkStyle>
  );
};

export default Logotype;
