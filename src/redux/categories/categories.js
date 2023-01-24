export const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

export const checkstatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
