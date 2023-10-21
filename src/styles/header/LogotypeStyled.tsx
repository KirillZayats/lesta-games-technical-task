import styled from "styled-components";
import Icon from "../Icon";
import { Link } from "react-router-dom";

const LogotypeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover path {
    fill: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
`;
const NameLogotypeStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Svg = styled(Icon)`
  width: 20px;
  height: 25px;
`;

const Iconlogotype: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <Svg viewBox="0 0 35 42" className={className}>
<path fillRule="evenodd" clipRule="evenodd" d="M34.9996 0H0V34.8949L17.5002 42L35 34.8949L34.9996 0ZM32.0467 32.954L17.5002 38.8508L2.95376 32.954V2.90724H32.0467V32.954Z" fill="current"/>
<path fillRule="evenodd" clipRule="evenodd" d="M29.0921 31.0065V18.811L23.3343 21.1491V27.2097L20.3801 28.4092V18.6031H21.8562L26.1379 16.8651V12.9356H20.3801V11.4811L23.1845 9.74652V5.8149H11.8159V9.74316L14.6224 11.4811V12.9356H8.86425V16.8672L13.146 18.6031H14.6224V28.4092L11.6661 27.2097V21.1491L5.90836 18.8105V31.0073L17.5002 35.7105L29.0921 31.0065Z" fill="current"/>
  </Svg>
);

const LinkStyle = styled(Link)`
  &:link span,
  &:visited span {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
  &:hover span {
    color: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }

`;

export {
    LogotypeStyle,
    Iconlogotype,
    NameLogotypeStyle,
    LinkStyle
}