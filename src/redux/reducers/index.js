import { ADD_ARTICLE, DATA_LOADED } from "../actions/actions-types";

const initialState = {
  articles: [],
  data: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;

// we can return a new state with Object.assign (not to modify the present one), 
// that is, a new JavaScript object. This way we keep the original state unaltered. 
// Then we can use Array.prototype.concat in place of Array.prototype.push for keeping the original array

// Now the resulting state is just a copy of the initial state. Remember two key points for avoiding mutations in Redux:

// 1. use concat(), slice(), or the spread operator for arrays
// 2. use Object.assign() or object spread of objects