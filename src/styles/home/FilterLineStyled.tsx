import styled from "styled-components";

const FilterLineStyle = styled.section`
  width: calc(100% - 40px);
  /* height: 50px; */
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 20px;
  gap: 30px;
  cursor: pointer;

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
`;

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 70px;

  .active-element {
    background: ${({ theme }) => theme.colors.HOVER_TEXT_COLOR};
  }
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
const NationNameStyle = styled.span``;

export {
    NationIconStyle,
    NationNameStyle,
    NationStyle,
    ElementsListStyle,
    ListStyle,
    FilterLineStyle
}