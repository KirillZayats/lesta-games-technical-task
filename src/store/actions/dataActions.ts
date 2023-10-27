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
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {                
                dispatch(getDataSuccess(data.data.vehicles))
            })
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