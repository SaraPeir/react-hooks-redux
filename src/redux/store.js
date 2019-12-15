import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { forbiddenWordsMiddleware } from "./middlewares/forbiddenWordsMiddleware";
import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware, thunk)
  );
// You may also pass an initial state to createStore, useful for server side rendering and state preloading

export default store;