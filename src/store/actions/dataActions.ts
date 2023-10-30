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
                throw new Error(response.statusText);
            }
            return response;
        })
        .then(response => {                                
            return response.json()
        })
        .then(data => {  
            dispatch(getDataSuccess(data.data.vehicles))
        })
        .catch(error => {
            console.log(error);      
            dispatch(errorData('Error - No connection to server'))              
        })
    }
}

export const errorData = (errorMessage: string): DataAction => {
    return {
        type: DataActionType.ERROR_DATA,
        isLoading: true,
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