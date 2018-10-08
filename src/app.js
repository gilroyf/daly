import React, { Component } from "react";
import ReactDOM from "react-dom";
import Routes from "./router/router"
import "./styles/styles.scss"
import "normalize.css/normalize.css";
import { createStore, combineReducers } from 'redux';
import EventReducer from './reducers/event-reducer';
import setEvents from './actions/set-events';
import addEvent from './actions/add-event';
import Events from './events';
import { Provider } from 'react-redux';

const demoState = { 
    event: []
}

const store = createStore(combineReducers({
    event: EventReducer
}));

const unsub = store.subscribe( () => console.log('state ' + store.getState()) );

store.dispatch(setEvents( {events: Events} ));

console.log('State ' + store.getState().event.length );
const wrapper = document.getElementById("root");
const jsx = (
    <Provider store = {store} >
        <Routes store={store}/>
    </Provider>
);
wrapper ? ReactDOM.render(jsx, wrapper) : false;

unsub();