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
      const newData = [...state];
      newData.push({
        ...action.data,
        id: state.length+ 1
      });
      return newData;
    case EDIT_BOOK_DATA:
      const newState = JSON.parse(JSON.stringify(state));
debugger
      newState.forEach((data, index) => {
        if(data.id == action.data.id) {
          newState[index] = {...action.data};
        }
      });
      return newState;
      default:
        return state;
  };
}

export const getBooks = (state) => state.app;