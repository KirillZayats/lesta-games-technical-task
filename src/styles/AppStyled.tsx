import { createGlobalStyle, styled } from "styled-components";
import { device, size } from "../styles/media/MediaQueryStyled";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    scroll-behavior: smooth;
  }

  

  body {
    background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  
  li {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  h2 {
    font-size: 28px;
  }

  p, a {
    font-size: 16px;
  }

  path {
    fill: ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  span, path, a, p, img {
    transition: .3s ease-out;
  }


`;

const ContainerPageStyle = styled.main`
  margin: 0 auto;
  padding: 120px 0 60px;
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    max-width: calc(100% - 20px);
    gap: 50px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
    gap: 60px;
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
`;

const ContainerProvider = styled.div``;

export {
  GlobalStyle, 
  ContainerProvider,
  ContainerPageStyle
}