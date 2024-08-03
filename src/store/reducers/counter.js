const initialState = {
  count: 100,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count_inc":
      return {
        ...state, // preserve other existing state variables
        count: state.count + 1,
      };
    case "count_dec":
      return {
        ...state,
        count: state.count - 1,
      };
    case "count_reset":
      return initialState;
    case "count_inc_by":
      return {
        ...state,
        count: state.count + action.number,
      };
    default:
      return state;
  }
};

export default countReducer;
