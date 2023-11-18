import { SET_ADOPTIONS_LOADER } from "../actionTypes/adoptions";

const initialState = {
    adoptionLoader: false,
  };
  
  const adoptionsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_ADOPTIONS_LOADER:
        return {
          ...state,
          adoptionLoader: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default adoptionsReducer;
  