import React, { Component } from "react";
import ReactDOM from "react-dom";
import Mailto from 'react-protected-mailto';
import Top from "./top";
import Page from './page';
import { connect } from 'react-redux';
const home = () => {
    const widget = (
            <div>
            <p>
            Welcome to the 2019 Daly 5th grade website! 
            </p>
            <p>
            We have compiled all of the important details for the year into one place. We will update this site as necessary, please check back often. We can be reached at:
            </p>
            <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        Jen Fernandes
                    </td>
                    <td>
                        Amy Nash
                    </td>
                </tr> 
                <tr>
                    <td><Mailto email="Fernandes.jennifer25@gmail.com" 
                                headers={
                                    {subject:'Daly 5th Grade'}
                                } />
                    </td>
                    <td><Mailto email="Nash812@gmail.com" 
                                headers={
                                    {subject:'Question from the website'}
                                } />
                    </td>
                </tr> 
                <tr>
                    <td><Mailto tel='516-967-5702' /></td>
                    <td><Mailto tel='917-549-2260' /></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>   
    );
    return (
        <Page widget={widget} />
    )
};

export default connect((state) => {
    events: state.events;
})(home) ; 
