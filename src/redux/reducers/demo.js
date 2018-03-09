const init = {
  fruits: [],
};

const demoReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_FRUITS':
      return {
        ...state,
        fruits: action.payload,
      };
    default:
  }
  return state;
};

export default demoReducer;
