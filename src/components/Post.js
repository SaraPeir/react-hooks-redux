import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { getData } from "../redux/actions/index";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

// useSelector does not re-render the component if it (useSelector) returns the same prior value


const Post = () => {
  const data = useSelector(state => state.data);
  console.log('DATA', data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
      .then(response => response && response.json())
  }, []);

  return (
    <main>
      {data[0] && data[0].ingredients.map(el => <p key={el.idIngredient}>{el.strIngredient}</p>)}
    </main>
  );
};

export default React.memo(Post);

// unlike connect(), useSelector() does not prevent the component from re-rendering 
// due to its parent re-rendering, even if the component's props did not change.

// If further performance optimizations are necessary, 
// you may consider wrapping your function component in React.memo()


