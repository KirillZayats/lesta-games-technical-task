import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";
import { SidebarStyle } from "./SidebarStyled";
import { LogotypeStyle } from "../header/LogotypeStyled";

const NavStyle = styled.nav`
  margin-left: auto;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    max-width: calc(${size.laptop});
    visibility: hidden;
    opacity: 0;
    left: 0;
    position: absolute;
    height: 1px;
    width: 100%;
    top: -45px;
    background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};
  }

  @media ${device.laptop} {
    visibility: visible;
    opacity: 1;
    position: static;
    height: auto;
    width: auto;
    background: inherit;
  }
`;
const ListNavStyle = styled.ul`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
  }

  @media ${device.laptop} {
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
  }
`;

const HeaderStyle = styled.header`
  margin: 0 auto;
  width: 100%;
  position: fixed;
  z-index: 4;
`;

const ContainerStyle = styled.div`
  background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 8px;
  gap: 32px;
  margin: 0 auto;

  @media ${device.mobileS} {
    max-width: calc(100% - 20px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 50px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 300px);
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} .top {
    transform: rotate(-45deg);
    top: 4px;
  }
  input[type="checkbox"]:checked ~ ${SidebarStyle} .bottom {
    transform: rotate(45deg);
    width: 22px;
    top: -2px;
  }

  input[type="checkbox"]:checked ~ ${NavStyle} {
    visibility: visible;
    opacity: 1;
    top: 0px;
    height: 100vh;
  }

  ${LogotypeStyle} {
    z-index: 2;
  }
`;

export { ContainerStyle, HeaderStyle, NavStyle, ListNavStyle };
