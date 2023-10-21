import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actions } from "../actions";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}