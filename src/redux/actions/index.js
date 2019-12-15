import { ADD_ARTICLE, DATA_LOADED } from "./actions-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
    return function(dispatch) {
      return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json });
        });
    };
  }

  // con redux-thunk it is possible to return a function instead of an obj by an action-creator
  // this is useful when we want to fetch data from an action
  // Without it, we should write:
  /* export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return { type: "DATA_LOADED", payload: json };
      });
  } */

  // it will return an error since we receives a promise instead of an object