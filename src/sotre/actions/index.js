import {
  GET_CATEGORIES,
  GET_CATS,
  SET_CATEGORY_ID,
} from "../actionTypes/actionTypes";

export const categoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

export const getCatsAction = (cats) => ({ type: GET_CATS, payload: cats });

export const setCategoryIdAction = (ID) => ({
  type: SET_CATEGORY_ID,
  payload: ID,
});
