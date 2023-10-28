import { PageAction, PageActionType } from "../types"

export const setUrl = (url: string): PageAction => {
    return {
        type: PageActionType.SET_URL,
        url: url,
    }
}