import { TVehicles } from "../../additionally/interfaces";

export enum DataActionType {
    GET_DATA = "GET_DATA"
}

 export interface IGetDataAction {
    type: DataActionType.GET_DATA,
    isLoading: boolean,
    data: TVehicles,
};

export type DataAction = IGetDataAction; 
