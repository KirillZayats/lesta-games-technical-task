import React, { useEffect, useState } from "react";
import { TypeFilter } from "../../additionally/constants";
import { IDataFilter, IPropsFilter } from "../../additionally/interfaces";
import { userTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import {
  NationIconStyle,
  NationNameStyle,
  NationStyle,
  ElementsListStyle,
  ListStyle,
  FilterLineStyle
} from "../../styles/home/FilterLineStyled"

const FilterLine: React.FC<IPropsFilter> = ({setNowPage}) => {
  const { mapTypesFilter } = userTypeSelector((state: any) => state.data);
  const { changeArrayFilter } = useAction();

  const changeStatusFilter = (event: any) => {
    
    let element: HTMLElement;
    switch (event.target.nodeName) {
      case "DIV":
        element = event.target.parentElement
        break;
      case "SPAN":
        element = event.target.parentElement.parentElement
        break;
      case "IMG":
        element = event.target.parentElement.parentElement
        break;
      default:
        element = event.target
        break;
    }    
    element.classList.toggle('active-element');
    changeArrayFilter(element.getElementsByTagName('span')[0].innerHTML, element.classList.value.includes('active-element'))
    setNowPage(1);
  };

  return (
    <FilterLineStyle>
      <ListStyle>
        <ElementsListStyle>
          <NationNameStyle>Nation</NationNameStyle>
        </ElementsListStyle>
        {mapTypesFilter && mapTypesFilter
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
        {mapTypesFilter && mapTypesFilter
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
        {mapTypesFilter && mapTypesFilter
          .get(TypeFilter.LEVEL_FILTER)
          .map((element: IDataFilter | Omit<IDataFilter, 'icon'>, index: number) => (
            <ElementsListStyle key={index} onClick={changeStatusFilter}>
              <NationStyle>
                  <NationNameStyle>{element.name}</NationNameStyle>
              </NationStyle>
            </ElementsListStyle>
          ))}
      </ListStyle>
    </FilterLineStyle>
  );
};

export default FilterLine;
