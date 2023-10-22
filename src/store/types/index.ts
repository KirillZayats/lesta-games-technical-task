import { IVehicles } from "../../additionally/interfaces";

export enum DataActionType {
    GET_DATA = "GET_DATA"
}

 export interface IGetDataAction {
    type: DataActionType.GET_DATA,
    isLoading: boolean,
    data: IVehicles[],
};

export type DataAction = IGetDataAction; 
