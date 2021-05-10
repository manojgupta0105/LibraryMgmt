
export const addBookData = () => (dispatch, getState) => {
  dispatch({ type: INCREMENT_COUNTER })
}

export const editBookData = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_TRANSITIONS })
}
