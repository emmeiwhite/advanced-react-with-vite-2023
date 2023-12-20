import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return {
      ...state,
      users: [],
    };
  }

  if (action.type === RESET_LIST) {
    return {
      ...state,
      users: data,
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload.id),
    };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - ACTION TYPE`);
};

export default reducer;
