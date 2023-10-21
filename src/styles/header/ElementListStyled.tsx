import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../media/MediaQueryStyled";

const ElementListStyle = styled.li``;

const LinkNavStyle = styled(Link)`
  font-style: normal;
  line-height: normal;
  padding: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};

  @media ${device.mobileS} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
`;

export { LinkNavStyle, ElementListStyle };
