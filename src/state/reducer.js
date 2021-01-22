const initialState = {
  data:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'xx':
      return {
        ...state
      }
    default:
      return state;
  }
}

export default reducer;