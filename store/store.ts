import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducers } from "./reducers";
import { InitialShape } from "./shape";

const store = createStore(appReducers, InitialShape, applyMiddleware(thunk));

export default store;
