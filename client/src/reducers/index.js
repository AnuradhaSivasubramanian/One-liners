import { combineReducers } from "redux";
import onelinerReducer from "./onelinerReducer";

const allReducers = combineReducers({
  o: onelinerReducer,
});
export default allReducers;
