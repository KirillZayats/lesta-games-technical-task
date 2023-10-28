import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
   data: dataReducer,
   page: pageReducer
});

export type RootState = ReturnType<typeof rootReducer>