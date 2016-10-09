import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import monsterChatApp from './reducers'
import MonsterChat from './components/MonsterChat'

let store = createStore(monsterChatApp)

render(
  <Provider store={store}>
    <MonsterChat />
  </Provider>,
  document.getElementById('root')
)
