import { TypeSort } from "../../additionally/constants";
import { IVehicles } from "../../additionally/interfaces";
import { DataAction, DataActionType } from "../types";

const initialState = {
  isLoading: false,
  data: {},
  mapSortData: new Map<string, IVehicles[]>(),
};

const getMap = (data: IVehicles[]): Map<string, IVehicles[]> => {
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

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case DataActionType.GET_DATA:
      return {
        data: action.data,
        isLoading: action.isLoading,
        mapSortData: getMap(action.data)
      };
    default:
      return state;
  }
};
