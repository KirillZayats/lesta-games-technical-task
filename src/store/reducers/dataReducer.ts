import { TypeFilter, TypeSort } from "../../additionally/constants";
import { IDataFilter, IVehicles } from "../../additionally/interfaces";
import { DataAction, DataActionType } from "../types";

const initialState = {
  isLoading: false,
  data: {},
  mapSortData: new Map<string, IVehicles[]>(),
  mapTypesFilter: new Map<string, number[] | IDataFilter[] | IDataFilter[]>(),
};

const getMapSort = (data: IVehicles[]): Map<string, IVehicles[]> => {
  let dataSort: IVehicles[] = [];
  let map = new Map<string, IVehicles[]>();
  Object.keys(TypeSort).forEach((element) => {
    dataSort = [...data];      
    switch (element) {
      case TypeSort.NATION_ASC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
            firstItem.nation.name.toLowerCase() <
            secondItem.nation.name.toLowerCase()
              ? -1
              : 1
          )
        );
        break;
      case TypeSort.NATION_DESC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
            firstItem.nation.name.toLowerCase() <
            secondItem.nation.name.toLowerCase()
              ? 1
              : -1
          )
        );
        break;
      case TypeSort.TYPE_ASC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
            firstItem.type.name.toLowerCase() <
            secondItem.type.name.toLowerCase()
              ? -1
              : 1
          )
        );
        break;
      case TypeSort.TYPE_DESC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
            firstItem.type.name.toLowerCase() <
            secondItem.type.name.toLowerCase()
              ? 1
              : -1
          )
        );
        break;
      case TypeSort.LEVEL_ASC:        
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
          secondItem.level - firstItem.level
          )
        );
        break;
      case TypeSort.LEVEL_DESC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
            firstItem.level - secondItem.level
          )
        );
        break;
      case TypeSort.NAME_ASC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
          firstItem.title.toLowerCase() <
          secondItem.title.toLowerCase()
            ? 1
            : -1
        ));
        break;
      case TypeSort.NAME_DESC:
        map.set(
          element,
          dataSort.sort((firstItem, secondItem) =>
          firstItem.title.toLowerCase() <
          secondItem.title.toLowerCase()
            ? -1
            : 1
          )
        );
        break;
      default:
        break;
    }
  });  
  return map;
};

const getMapFilter = (data: IVehicles[]): Map<string, number[] | IDataFilter[] | IDataFilter[]> => {
  const map = new Map<string, number[] | IDataFilter[] | IDataFilter[]>();
  const countLevel = 11;
  const level: number[] = [...Array(countLevel)].map((_, index) => index + 1);
  const nation: IDataFilter[] = [];
  const type: IDataFilter[] = [];

  const iconsNation = [ ...new Set(data.map(item => item.nation.icons.small)) ];
  const titleNation = [ ...new Set(data.map(item => item.nation.title)) ];
  const iconsType = [ ...new Set(data.map(item => item.type.icons.default)) ];
  const nameType = [ ...new Set(data.map(item => item.type.title)) ];

  for (let index = 0; index < iconsNation.length; index++) {
    nation.push({name: titleNation[index], icon: iconsNation[index]})
  }
  for (let index = 0; index < iconsType.length; index++) {
    type.push({name: nameType[index], icon: iconsType[index]})
  }

  map.set(TypeFilter.NATION_FILTER, nation);
  map.set(TypeFilter.TYPE_FILTER, type);
  map.set(TypeFilter.LEVEL_FILTER, level);
  return map;
}

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case DataActionType.GET_DATA:
      getMapFilter(action.data)
      return {
        data: action.data,
        isLoading: action.isLoading,
        mapSortData: getMapSort(action.data),
        mapTypesFilter: getMapFilter(action.data),
      };
    default:
      return state;
  }
};
