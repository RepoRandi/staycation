import { FETCH_PAGE } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
