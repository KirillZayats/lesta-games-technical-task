import { PageAction, PageActionType } from "../types"

const initialState = {
    url: '/',
}

export const pageReducer = (state = initialState, action: PageAction) => {
    switch (action.type) {
      case PageActionType.SET_URL:
        return {
          url: action.url,
        };
      default:
        return state;
    }
  };
  