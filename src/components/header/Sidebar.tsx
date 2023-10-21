import React from "react";
import {
  SidebarStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
} from "../../styles/header/SidebarStyled";

const Sidebar = () => {
  return (
    <SidebarStyle htmlFor="checked" id="sidebar">
      <SidebarElementsstyle htmlFor="checked">
        <SidebarElementStyle className="top" />
        <SidebarElementStyle className="bottom" />
      </SidebarElementsstyle>
    </SidebarStyle>
  );
};

export default Sidebar;
