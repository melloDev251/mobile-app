import { INCRUST_AGE, SET_AGE, GET_CITIES } from "./actions";

const initialState = {
  age: 0,
  cities: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AGE:
      return { ...state, age: action.payload };
    case INCRUST_AGE:
      return { ...state, age: state.age - 1 };
    case GET_CITIES:
      return { ...state, cities: action.payload };

    default:
      return state;
  }
}
