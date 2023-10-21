import React, { useState } from "react";
import { PropsElementList } from "../../additionally/interfaces";
import {
  LinkNavStyle,
  ElementListStyle,
} from "../../styles/header/ElementListStyled";

const ElementList: React.FC<PropsElementList> = ({textElement }) => {
  return (
    <ElementListStyle>
      <LinkNavStyle to={textElement === "Home" ? "" : textElement.toLowerCase()} className="no-active">
        {textElement}
      </LinkNavStyle>
    </ElementListStyle>
  );
};

export default ElementList;
