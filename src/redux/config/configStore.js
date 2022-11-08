import { createStore } from "redux";
import { combineReducers } from "redux";
import news from "../modules/news";


const rootReducer = combineReducers({
  news,
});
const store = createStore(rootReducer);

export default store;