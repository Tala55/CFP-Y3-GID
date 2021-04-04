import React from 'react'

import App from "../Reminder/App"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../Reminder/reducers';
import '../Reminder/index.css';





function Calendar() {

const store = createStore(reducer);
    return (
        <div>
           <Provider store={store}>
    <App />
  </Provider>
        </div>
    )
}

export default Calendar
