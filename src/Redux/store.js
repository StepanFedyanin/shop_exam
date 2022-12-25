import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { GlobalThemas } from "./Reducer/PageSettings";
const rootReducer = combineReducers({
	GlobalThemas: GlobalThemas
})
export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
