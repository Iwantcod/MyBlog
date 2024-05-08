import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const enhancer = process.env.NODE_ENV === "production"
? compose(applyMiddleware())
: composeWithDevTools(applyMiddleware());
//  Redux Store 생성 및 redux-devtools-extension 적용

const store = createStore(rootReducer, enhancer);





export default store;