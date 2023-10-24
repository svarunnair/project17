import thunk from "redux-thunk";
import { reducer } from "./reducer";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");




const root=combineReducers({
    data: reducer
})
export const store = legacy_createStore(root, applyMiddleware(thunk))
