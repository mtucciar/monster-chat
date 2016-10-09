import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import monsterChatApp from './reducers'
import MonsterChat from './components/MonsterChat'
import monsterChatClient, {chatMiddleware} from './chat'

const initialState = window.INITIAL_STATE;
const createStoreWithMiddleware = applyMiddleware(chatMiddleware)(createStore);
const store = createStoreWithMiddleware(monsterChatApp);

monsterChatClient(store);

render(
  <Provider store={store}>
    <MonsterChat />
  </Provider>,
  document.getElementById('root')
)
