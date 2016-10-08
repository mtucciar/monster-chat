const mainReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}


const { createStore } = Redux;
const { Provider, connect } = reactRedux;


const store = createStore(mainReducer);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT'});
