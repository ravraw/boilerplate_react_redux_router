const initialState = {
  skyIsBlue: true
};

const header_reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType_1:
      return {
        ...state,
        skyIsBlue:!state.skyIsBlue
      },
      case actionType_2:
      return {
        ...state,
        skyIsBlue:!state.skyIsBlue
      },
    default:
      return state;
  }
};
