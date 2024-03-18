const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const prevGood = state.good
      const changedStateGood = {
        ...state,
        good: prevGood+1
      }
      return changedStateGood
    case 'OK':
      const prevOk= state.ok
      const changedStateOk = {
        ...state,
        ok: prevOk+1
      }
      return changedStateOk
    case 'BAD':
      const prevBad= state.bad
      const changedStateBad = {
        ...state,
        bad: prevBad+1
      }
      return changedStateBad
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer
