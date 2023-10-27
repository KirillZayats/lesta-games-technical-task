import styled from "styled-components";

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
    margin: 10px auto;
    flex-direction: row;
    justify-content: center;
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