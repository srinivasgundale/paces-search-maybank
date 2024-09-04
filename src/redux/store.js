import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Update this line
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
