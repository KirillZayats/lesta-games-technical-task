import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TypeFilter } from "../../additionally/constants";
import { IDataFilter, IPropsFilter } from "../../additionally/interfaces";

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

const FilterLine: React.FC<IPropsFilter> = ({valuesFilter, setValuesFilter}) => {
  const { mapTypesFilter } = useSelector((state: any) => state.data);


    const changeArrayValuesFilter = (value: string): void => {
        let isStatus: boolean = false;
        valuesFilter?.forEach((element: string, index: number) => {
            if(element === value) {
                valuesFilter.splice(index, 1);
                isStatus = true;
            }
        })
        !isStatus && setValuesFilter([...valuesFilter, value])
    }

  const changeStatusFilter = (event: any) => {
    
    let element: HTMLElement;
    switch (event.target.nodeName) {
      case "DIV":
        element = event.target.parentElement
        break;
      case "SPAN":
        // event.target.parentElement.parentElement.className.toggle("")
        element = event.target.parentElement.parentElement

        break;
      case "IMG":
        element = event.target.parentElement.parentElement
        break;
      default:
        element = event.target
        break;
    }
    element.classList.toggle('active-element')
    changeArrayValuesFilter(element.getElementsByTagName('span')[0].innerHTML);
    console.log(valuesFilter);
  };

  return (
    <FilterLineStyle>
      <ListStyle>
        <ElementsListStyle>
          <NationNameStyle>Nation</NationNameStyle>
        </ElementsListStyle>
        {mapTypesFilter
          .get(TypeFilter.NATION_FILTER)
          .map((element: IDataFilter, index: number) => (
            <ElementsListStyle key={index} onClick={changeStatusFilter}>
              <NationStyle>
                <NationIconStyle src={element.icon} />
                <NationNameStyle>{element.name}</NationNameStyle>
              </NationStyle>
            </ElementsListStyle>
          ))}
      </ListStyle>
      <ListStyle>
        <ElementsListStyle>
          <NationNameStyle>Type</NationNameStyle>
        </ElementsListStyle>
        {mapTypesFilter
          .get(TypeFilter.TYPE_FILTER)
          .map((element: IDataFilter, index: number) => (
            <ElementsListStyle key={index} onClick={changeStatusFilter}>
              <NationStyle>
                <NationIconStyle src={element.icon} />
                <NationNameStyle>{element.name}</NationNameStyle>
              </NationStyle>
            </ElementsListStyle>
          ))}
      </ListStyle>
      <ListStyle>
        <ElementsListStyle>
          <NationNameStyle>Level</NationNameStyle>
        </ElementsListStyle>
        {mapTypesFilter
          .get(TypeFilter.LEVEL_FILTER)
          .map((element: IDataFilter | number, index: number) => (
            <ElementsListStyle key={index} onClick={changeStatusFilter}>
              <NationStyle>
                {typeof element === "number" && (
                  <NationNameStyle>{element}</NationNameStyle>
                )}
              </NationStyle>
            </ElementsListStyle>
          ))}
      </ListStyle>
    </FilterLineStyle>
  );
};

export default FilterLine;
