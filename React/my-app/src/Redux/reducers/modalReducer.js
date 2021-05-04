import { HIDE_MODAL, OPEN_MODAL } from "../types";
import { INITIAL_STATE } from "./itemsReducer";

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };

    default:
      return state;
  }
};

export {modalReducer}

