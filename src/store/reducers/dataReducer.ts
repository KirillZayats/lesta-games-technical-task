import { TypeFilter, TypeSort } from "../../additionally/constants";
import {
  IDataFilter,
  IVehicles,
  TMapValuesFilter,
  TGetUseDataFilter,
  TMainFilter,
  TUseFilterLevel,
  TUseFilterType,
  TGetMapFilter,
  TGetTypeFilter,
  TFindTypeFilter,
  TSortData,
} from "../../additionally/interfaces";
import { DataAction, DataActionType } from "../types";

const initialState = {
  isLoading: false,
  startData: [],
  useData: [],
  mapTypesFilter: new Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>(),
  mapValuesFilter: new Map<string, string[]>(),
  errorMessage: '',
};

const sortData: TSortData = (data, typeSort) => {
  let dataSort: IVehicles[] = [...data];
  switch (typeSort) {
    case TypeSort.NATION_ASC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.nation.name.toLowerCase() <
        secondItem.nation.name.toLowerCase()
          ? -1
          : 1
      );
      break;
    case TypeSort.NATION_DESC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.nation.name.toLowerCase() <
        secondItem.nation.name.toLowerCase()
          ? 1
          : -1
      );
      break;
    case TypeSort.TYPE_ASC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.type.name.toLowerCase() < secondItem.type.name.toLowerCase()
          ? -1
          : 1
      );
      break;
    case TypeSort.TYPE_DESC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.type.name.toLowerCase() < secondItem.type.name.toLowerCase()
          ? 1
          : -1
      );
      break;
    case TypeSort.LEVEL_ASC:
      dataSort.sort(
        (firstItem, secondItem) => secondItem.level - firstItem.level
      );
      break;
    case TypeSort.LEVEL_DESC:
      dataSort.sort(
        (firstItem, secondItem) => firstItem.level - secondItem.level
      );
      break;
    case TypeSort.NAME_ASC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.title.toLowerCase() < secondItem.title.toLowerCase() ? 1 : -1
      );
      break;
    case TypeSort.NAME_DESC:
      dataSort.sort((firstItem, secondItem) =>
        firstItem.title.toLowerCase() < secondItem.title.toLowerCase() ? -1 : 1
      );
      break;
    default:
      break;
  }
  return dataSort;
};

const getMapFilter: TGetMapFilter = (data) => {
  const map = new Map<string, IDataFilter[] | Omit<IDataFilter, "icon">[]>();
  const countLevel = 11;
  const level: Omit<IDataFilter, "icon">[] = [];
  const nation: IDataFilter[] = [];
  const type: IDataFilter[] = [];

  for (let index = 1; index <= countLevel; index++) {
    level.push({ name: index + "" });
  }
  const iconsNation = [...new Set(data.map((item) => item.nation.icons.small))];
  const titleNation = [...new Set(data.map((item) => item.nation.title))];
  const iconsType = [...new Set(data.map((item) => item.type.icons.default))];
  const nameType = [...new Set(data.map((item) => item.type.title))];

  for (let index = 0; index < iconsNation.length; index++) {
    nation.push({ name: titleNation[index], icon: iconsNation[index] });
  }
  for (let index = 0; index < iconsType.length; index++) {
    type.push({ name: nameType[index], icon: iconsType[index] });
  }

  map.set(TypeFilter.NATION_FILTER, nation);
  map.set(TypeFilter.TYPE_FILTER, type);
  map.set(TypeFilter.LEVEL_FILTER, level);
  return map;
};

const getUseDataFilter: TGetUseDataFilter = (
  value,
  isStatus,
  startData,
  useData,
  map
) => {
  let typeFilter = getTypeFilter(map, value);
  if (isStatus) {
    addMapValuesFilter(typeFilter, value);
    useData = [...applyFilterAll(useData, startData)];
  } else {
    deleteMapValuesFilter(typeFilter, value);
    if (
      (initialState.mapValuesFilter.get(TypeFilter.NATION_FILTER)?.length ===
        0 ||
        !initialState.mapValuesFilter.get(TypeFilter.NATION_FILTER)) &&
      (initialState.mapValuesFilter.get(TypeFilter.TYPE_FILTER)?.length === 0 ||
        !initialState.mapValuesFilter.get(TypeFilter.TYPE_FILTER)) &&
      (initialState.mapValuesFilter.get(TypeFilter.LEVEL_FILTER)?.length ===
        0 ||
        !initialState.mapValuesFilter.get(TypeFilter.LEVEL_FILTER))
    ) {
      useData = [...startData];
    } else {
      useData = [...applyFilterAll(useData, startData)];
    }
  }
  return useData;
};

const applyFilterAll: TMainFilter = (useData, startData) => {
  useData = [...applyFilterNation(useData, startData)];
  let { data, statusEntry } = applyFilterType(useData, startData);
  return applyFilterLevel(data, startData, statusEntry);
  // return data;
};

const applyFilterNation: TMainFilter = (useData, startData) => {
  useData = [];
  if (
    initialState.mapValuesFilter.get(TypeFilter.NATION_FILTER) &&
    initialState.mapValuesFilter.get(TypeFilter.NATION_FILTER)!.length > 0
  ) {
    initialState.mapValuesFilter
      .get(TypeFilter.NATION_FILTER)!
      .forEach((itemFilter) => {
        useData = [
          ...useData,
          ...startData.filter(
            (itemData) => itemData.nation.title === itemFilter
          ),
        ];
      });
  }
  return useData;
};

const applyFilterType: TUseFilterType = (useData, startData) => {
  let newUseData: IVehicles[] = [];
  let statusEntry: boolean = false;
  if (
    initialState.mapValuesFilter.get(TypeFilter.TYPE_FILTER) &&
    initialState.mapValuesFilter.get(TypeFilter.TYPE_FILTER)!.length > 0
  ) {
    if (useData.length === 0) {
      initialState.mapValuesFilter
        .get(TypeFilter.TYPE_FILTER)!
        .forEach((itemFilter) => {
          useData = [
            ...useData,
            ...startData.filter(
              (itemData) => itemData.type.title === itemFilter
            ),
          ];
        });
    } else {
      initialState.mapValuesFilter
        .get(TypeFilter.TYPE_FILTER)!
        .forEach((itemFilter) => {
          newUseData = [
            ...newUseData,
            ...useData.filter((itemData) => itemData.type.title === itemFilter),
          ];
        });
      statusEntry = true;
    }
  }
  return { data: statusEntry ? [...newUseData] : useData, statusEntry };
};

const applyFilterLevel: TUseFilterLevel = (useData, startData, statusEntry) => {
  let newUseData: IVehicles[] = [];
  if (
    initialState.mapValuesFilter.get(TypeFilter.LEVEL_FILTER) &&
    initialState.mapValuesFilter.get(TypeFilter.LEVEL_FILTER)!.length > 0
  ) {
    if (useData.length === 0) {
      if (!statusEntry) {
        initialState.mapValuesFilter
          .get(TypeFilter.LEVEL_FILTER)!
          .forEach((itemFilter) => {
            useData = [
              ...useData,
              ...startData.filter(
                (itemData) => `${itemData.level}` === itemFilter
              ),
            ];
          });
        statusEntry = true;
      }
    } else {
      initialState.mapValuesFilter
        .get(TypeFilter.LEVEL_FILTER)!
        .forEach((itemFilter) => {
          newUseData = [
            ...newUseData,
            ...useData.filter((itemData) => `${itemData.level}` === itemFilter),
          ];
        });
      statusEntry = false;
    }
    useData = !statusEntry ? [...newUseData] : useData;
  }
  return useData;
};

const deleteMapValuesFilter: TMapValuesFilter = (typeFilter, value) => {
  initialState.mapValuesFilter.set(typeFilter, [
    ...initialState.mapValuesFilter
      .get(typeFilter)!
      .filter((item) => item !== value),
  ]);
};

const addMapValuesFilter: TMapValuesFilter = (typeFilter, value) => {
  if (initialState.mapValuesFilter.size > 0) {
    switch (typeFilter) {
      case TypeFilter.NATION_FILTER:
        if (initialState.mapValuesFilter.get(TypeFilter.NATION_FILTER)) {
          initialState.mapValuesFilter.set(typeFilter, [
            ...initialState.mapValuesFilter.get(typeFilter)!,
            value,
          ]);
        } else {
          initialState.mapValuesFilter.set(typeFilter, [value]);
        }
        break;
      case TypeFilter.TYPE_FILTER:
        if (initialState.mapValuesFilter.get(TypeFilter.TYPE_FILTER)) {
          initialState.mapValuesFilter.set(typeFilter, [
            ...initialState.mapValuesFilter.get(typeFilter)!,
            value,
          ]);
        } else {
          initialState.mapValuesFilter.set(typeFilter, [value]);
        }
        break;
      case TypeFilter.LEVEL_FILTER:
        if (initialState.mapValuesFilter.get(TypeFilter.LEVEL_FILTER)) {
          initialState.mapValuesFilter.set(typeFilter, [
            ...initialState.mapValuesFilter.get(typeFilter)!,
            value,
          ]);
        } else {
          initialState.mapValuesFilter.set(typeFilter, [value]);
        }
        break;
    }
  } else {
    initialState.mapValuesFilter = new Map<string, string[]>();
    initialState.mapValuesFilter.set(typeFilter, [value]);
  }
};

const getTypeFilter: TGetTypeFilter = (map, value) => {
  let typeFilter: string = findTypeFilter(
    map.get(TypeFilter.NATION_FILTER)!,
    value,
    TypeFilter.NATION_FILTER
  );
  if (!typeFilter) {
    typeFilter = findTypeFilter(
      map.get(TypeFilter.TYPE_FILTER)!,
      value,
      TypeFilter.TYPE_FILTER
    );
  }
  if (!typeFilter) {
    typeFilter = findTypeFilter(
      map.get(TypeFilter.LEVEL_FILTER)!,
      value,
      TypeFilter.LEVEL_FILTER
    );
  }
  return typeFilter;
};

const findTypeFilter: TFindTypeFilter = (array, value, typeFilter) => {
  let type = "";
  for (let index = 0; index < array!.length; index++) {
    if (array![index].name === value) {
      index = array!.length;
      return typeFilter;
    }
  }
  return type;
};

export const dataReducer = (state = initialState, action: DataAction) => {  
  switch (action.type) {
    case DataActionType.INIT_DATA:
      initialState.mapValuesFilter = new Map<string, string[]>();
      return {
        startData: state.startData,
        useData: [...state.startData],
        isLoading: state.isLoading,
        mapTypesFilter: state.mapTypesFilter,
      };
    case DataActionType.GET_DATA:
      return {
        startData: [...action.data],
        useData: [...action.data],
        isLoading: action.isLoading,
        mapTypesFilter: getMapFilter(action.data),
      };
      case DataActionType.ERROR_DATA:
        return {
          startData: [],
          useData: [],
          isLoading: action.isLoading,
          errorMessage: action.errorMessage,
        };
    case DataActionType.CHANGE_FILTER:
      return {
        startData: state.startData,
        useData: [
          ...getUseDataFilter(
            action.value,
            action.status,
            state.startData,
            state.useData,
            state.mapTypesFilter
          ),
        ],
        isLoading: state.isLoading,
        mapTypesFilter: state.mapTypesFilter,
      };
    case DataActionType.SORT_DATA:
      return {
        startData: state.startData,
        useData: [...sortData(state.useData, action.typeSort)],
        isLoading: state.isLoading,
        mapTypesFilter: state.mapTypesFilter,
      };
    default:
      return state;
  }
};
