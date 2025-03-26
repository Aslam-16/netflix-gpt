import { useState } from 'react'

import './App.css'
import SignUp from './components/SignUp'
import Header from './components/Layouts/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './appstore/store'

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App
