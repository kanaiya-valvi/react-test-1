const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return { ...state, currIndex: action.payload.value };
    case "PREV":
      return { ...state, currIndex: action.payload.value };
    default:
      return { ...state };
  }
};

export default reducer;
