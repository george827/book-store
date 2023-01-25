import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const currentCategorie = useSelector((state) => state.categories);

  const statusHandler = () => {
    dispatch(checkstatus());
  };

  return (
    <div>
      <h2>{currentCategorie}</h2>
      <button type="button" onClick={statusHandler}> Check status</button>
    </div>
  );
};

export default Categories;
