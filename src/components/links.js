import React, { Component } from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
        links: this.props.links
        };
    }
    render(props) {
        return(
        <div className='link'>
            {!!this.state.links ? this.state.links.map(x => 
                {
                return <NavLink className='link__item' exact to={x.link} activeStyle={{
                    fontWeight: 'bold',
                    color: 'blue'
                   }}>{x.display}</NavLink>
                }) : <p></p>
            }
        </div>
    );
    }
}

export default Links;