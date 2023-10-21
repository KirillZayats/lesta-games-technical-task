import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../reducers";

export const userTypeSelector: TypedUseSelectorHook<RootState> = useSelector;