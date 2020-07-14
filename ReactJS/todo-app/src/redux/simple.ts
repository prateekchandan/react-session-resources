import { createStore } from 'redux'


// Initial state.
let initState =  {dollars: 0}
// Create a Redux store holding the state of your app.
let store = createStore(reducer, initState)


/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 */
function reducer(state = initState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { dollars: state.dollars + 10 }
    case 'DECREMENT':
      return { dollars: state.dollars - 10 }
    default:
      return state
  }
}



// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// create increment action
const increment_action = { type: 'INCREMENT' }


// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(increment_action)
// LOG => 10
store.dispatch({ type: 'INCREMENT' })
// LOG => 20
store.dispatch({ type: 'DECREMENT' })
// LOG => 10