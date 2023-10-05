import { TOGGLE_NAVBAR } from "../constants/ActionTypes";

const initialState = {
  navbar_expanded: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navbar_expanded: !state.navbar_expanded,
      };

    default:
      return state;
  }
}
