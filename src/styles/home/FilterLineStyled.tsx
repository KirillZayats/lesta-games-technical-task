import styled from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const FilterLineStyle = styled.section`
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 20px;
  gap: 30px;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  flex-direction: row;

   @media ${device.mobileS} {
    &:hover {
      flex-direction: column;

  }  }

  @media ${device.tablet} {
    &:hover {
      flex-direction: row;

  }  }

  &:hover li {
    opacity: 1;
    height: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  &:hover div {
    margin: 5px auto;
  }
  &:hover li:first-child {
    opacity: 1;
    height: 20px;
    border-bottom: none;
    margin-bottom: 20px;
  }

  @media ${device.mobileS} {
    max-width: calc(100% - 60px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 70px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 90px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 90px);
    gap: 60px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 90px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 90px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 340px);
  }
`;

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;

  .active-element {
    background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
  min-width: 70px;

  /* @media ${device.mobileS} {
    min-width: 40px;
  }

  @media ${device.tablet} {
    min-width: 70px;
  } */
`;
const ElementsListStyle = styled.li`
  transition: 0.3s ease-out;
  opacity: 0;
  height: 0;
  &:first-child {
    opacity: 1;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }

  &:hover:first-child {
    background: none;
  }
`;

const NationStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  height: 20px;
`;
const NationIconStyle = styled.img``;
const NationNameStyle = styled.span`
/* 
@media ${device.mobileS} {
    font-size: 12px;
  }
      @media ${device.tablet} {
      font-size: 16px;
} */

`;

export {
    NationIconStyle,
    NationNameStyle,
    NationStyle,
    ElementsListStyle,
    ListStyle,
    FilterLineStyle
}