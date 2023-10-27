import { IVehicles } from "../../additionally/interfaces";

export enum DataActionType {
    GET_DATA = "GET_DATA",
    CHANGE_FILTER = "CHANGE_FILTER",
    SORT_DATA = "SORT_DATA"
}

 export interface IGetDataAction {
    type: DataActionType.GET_DATA,
    isLoading: boolean,
    data: IVehicles[],
};

export interface IChangeArrayFilter {
    type: DataActionType.CHANGE_FILTER,
    value: string,
    status: boolean
}

export interface ISortData {
    type: DataActionType.SORT_DATA,
    typeSort: string,
}

export type DataAction = IGetDataAction | IChangeArrayFilter | ISortData; 
