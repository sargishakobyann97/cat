import {
  GET_CATEGORIES,
  GET_CATS,
  SET_CATEGORY_ID,
} from "../actionTypes/actionTypes";

const initialState = {
  categoryId: 1,
  categories: [],
  cats: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case SET_CATEGORY_ID:
      return {
        ...state,
        cats: [],
        categoryId: action.payload,
      };
    case GET_CATS:
      return {
        ...state,
        cats: [...state.cats, ...action.payload],
      };
    default:
      return state;
  }
}
