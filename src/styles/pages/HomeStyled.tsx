import styled from "styled-components";
import { device, size } from "../../styles/media/MediaQueryStyled";

const HomeStyle = styled.article`
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleStyle = styled.h2``;

const ListCardStyle = styled.ul`
  display: flex;
  flex-direction: column;
  
`;

const ContainerListStyle = styled.div`
margin-top: 20px;
  .pagination ul {
    margin: 20px auto;
    flex-direction: row;
    justify-content: center;
  }

  a {
    border-radius: 0px;
    @media ${device.mobileS} {
      min-width: 24px;
      height: 24px;
  }

  @media ${device.tablet} {
    min-width: 32px;
    height: 32px;
  }
  }

  .MuiPaginationItem-root {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  .MuiPaginationItem-root.Mui-selected {
    background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
`;

export {
    ContainerListStyle,
    ListCardStyle,
    HomeStyle,
    TitleStyle
}