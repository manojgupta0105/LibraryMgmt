import {
  ADD_BOOK_DATA,
  EDIT_BOOK_DATA
} from "../Container/BookActions";

const initialState = [
  {
    id: 1,
    name: "Hello",
    qty: 12,
    author: "Test",
    desc: ""
  }
];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOK_DATA:
      return [
        ...state,
        action.data
      ];
    case EDIT_BOOK_DATA:
      const newState = {...state};
      newState.forEach(data => {
        if(data.id === action.data.id) {
          data = action.data
        }
      });
      return {
        ...newState
      }
      default:
        return state;
  };
}

export const getBooks = (state) => state.app;