import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { getData } from "../redux/actions/index";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';


const Post = () => {
  const data = useSelector(state => state.data);
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

export default Post;


