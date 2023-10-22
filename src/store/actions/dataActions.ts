import { BASE_URL, query } from "../../additionally/constants";
import { IVehicles } from "../../additionally/interfaces";
import { DataActionType, IGetDataAction } from "../types";

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
                dispatch(getDataSuccess(data))
            })
    }
}

export const getDataSuccess = (data: IVehicles): IGetDataAction => {
    return {
        type: DataActionType.GET_DATA,
        data: data,
        isLoading: true,
    }
}