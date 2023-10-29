import { BASE_URL, query } from "../../additionally/constants";
import { IVehicles } from "../../additionally/interfaces";
import { DataAction, DataActionType } from "../types";

export const getData = () => {
    
    return async (dispatch: any) => {
        return fetch(BASE_URL, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
          })
            .then(response => {                
                if(!response.ok) {
                    console.error(response.statusText);  
                    return 'Error - No connection to server';
                }
                return response;
            })
            .then(response => {                
                return typeof response === 'string' ? response : response.json()
            })
            .then(data => {  
                dispatch(typeof data === 'string' ? dispatch(errorData(data)) : getDataSuccess(data.data.vehicles))
            })
    }
}

export const errorData = (errorMessage: string): DataAction => {
    return {
        type: DataActionType.ERROR_DATA,
        isLoading: false,
        errorMessage: errorMessage
    }
}

export const getDataSuccess = (data: IVehicles[]): DataAction => {
    return {
        type: DataActionType.GET_DATA,
        data: data,
        isLoading: true,
    }
}

export const changeArrayFilter = (value: string, status: boolean): DataAction => {
    return {
        type: DataActionType.CHANGE_FILTER,
        value: value,
        status: status
    }
}

export const sortData = (typeSort: string): DataAction => {
    return {
        type: DataActionType.SORT_DATA,
        typeSort: typeSort,
    }
}

export const initData = (): DataAction => {
    return {
        type: DataActionType.INIT_DATA
    }
}