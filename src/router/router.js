import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import NavBar from "../components/nav-bar"
import Home from "../components/home"
import NotFound from "../components/not-found"
import CalendarOfEvents from "../components/calendar-of-events"
import { Provider } from 'react-redux';

class Application extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }
    render(props) {
        return (
            <div>
            <NavBar />
            <p>1</p>
            </div>
        )
    }
}
    
const Application2 = () => (
    <div>
    <NavBar  />
    <p>2</p>
    </div>
);


const routes = ({store}) => (
    <Provider store = {store} >
    <BrowserRouter>
    <Switch>
      <Route path="/" component={() => (<Home />)} exact={true}/>
      <Route path="/calendar" component={() => (<CalendarOfEvents />)} />
      <Route component={() => (<NotFound />)} />
    </Switch>
    </BrowserRouter>
    </Provider >
  );

export default routes;