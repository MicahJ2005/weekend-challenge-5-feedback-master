import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    // console.log('in feedbackReducer');
    if(action.type === 'ADD_FEELING'){
        console.log(action.payload); 
        state = action.payload; 
    }
    else if(action.type === 'ADD_SUPPORT'){
        console.log(action.payload);
        state = {...state, ...action.payload};
    }
    else if(action.type === 'ADD_UNDERSTANDCONTENT'){
        console.log(action.payload);
        state = {...state, ...action.payload};
    }
    else if(action.type === 'ADD_COMMENT'){
        console.log(action.payload);
        state = {...state, ...action.payload};
    }
    // else if(action.type === 'ADD_THANKYOU'){
    //     console.log(action.payload);
    //     state = [];
    // }
    console.log('this is current state:', state);
    
    return state
}


const reduxStore = createStore(
    combineReducers({
      feedbackReducer,
    }),
    applyMiddleware(logger)
  )
  
  ReactDOM.render(
    <Provider store={reduxStore}>
      <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
