import React from "react";
import { IPropsSort } from "../../additionally/interfaces";
import { TypeSort } from "../../additionally/constants";
import {
  SortLineStyle, 
  IconType,
  IconNation, 
  TextSortStyle,
  FieldLevelStyle,
  FieldNameStyle,
  FieldNationStyle,
  FieldTypeStyle,  
} from "../../styles/home/SortLineStyled"

const SortLine: React.FC<IPropsSort> = ({typeSort, setTypeSort}) => {

  const setNation = () => {
    switch (typeSort) {
      case TypeSort.NATION_ASC:
        setTypeSort(TypeSort.NATION_DESC)
        break;
      case TypeSort.NATION_DESC:
          setTypeSort(TypeSort.NATION_ASC)
          break;
      default:
        setTypeSort(TypeSort.NATION_ASC)
        break;
    }
  }

  const setType = () => {
    switch (typeSort) {
      case TypeSort.TYPE_ASC:
        setTypeSort(TypeSort.TYPE_DESC)
        break;
      case TypeSort.TYPE_DESC:
          setTypeSort(TypeSort.TYPE_ASC)
          break;
      default:
        setTypeSort(TypeSort.TYPE_ASC)
        break;
    }
  }

  const setLevel = () => {
    switch (typeSort) {
      case TypeSort.LEVEL_ASC:
        setTypeSort(TypeSort.LEVEL_DESC)
        break;
      case TypeSort.LEVEL_DESC:
          setTypeSort(TypeSort.LEVEL_ASC)
          break;
      default:
        setTypeSort(TypeSort.LEVEL_ASC)
        break;
    }
  }

  const setName = () => {
    switch (typeSort) {
      case TypeSort.NAME_ASC:
        setTypeSort(TypeSort.NAME_DESC)
        break;
      case TypeSort.NAME_DESC:
          setTypeSort(TypeSort.NAME_ASC)
          break;
      default:
        setTypeSort(TypeSort.NAME_ASC)
        break;
    }
  }

  return (
    <SortLineStyle>
      <FieldNationStyle onClick={setNation}>
        <IconNation />
      </FieldNationStyle>
      <FieldTypeStyle onClick={setType}>
        <IconType />
      </FieldTypeStyle>
      <FieldLevelStyle onClick={setLevel}>
        <TextSortStyle>1-10</TextSortStyle>
      </FieldLevelStyle>
      <FieldNameStyle onClick={setName}>
        <TextSortStyle>Name Ship</TextSortStyle>
      </FieldNameStyle>
    </SortLineStyle>
  );
};

export default SortLine;
