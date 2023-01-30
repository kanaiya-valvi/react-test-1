const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return { ...state, currIndex: action.payload.currIndex };
    case "PREV":
      return { ...state, currIndex: action.payload.currIndex };
    case "CURRECT_ANS":
      return { ...state, currAnswer: action.payload.currIndex };
    case "RESTART":
      return {
        ...state,
        currIndex: action.payload.currIndex,
        userTrach: action.payload.userTrach,
      };
    case "NEWQUESTION":
      return { ...state, currIndex: action.payload.currIndex };
    default:
      return { ...state };
  }
};

export default reducer;
