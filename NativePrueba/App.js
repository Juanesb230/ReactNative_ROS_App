import React from "react";
import Setup from "./src/boot/setup";
import { Provider } from 'react-redux'
import { store, persistor } from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react'

export default class App extends React.Component {
  
  render() {
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Setup />
        </PersistGate>
      </Provider>
    )
  }
}
