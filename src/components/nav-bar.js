import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/header";
import Links from "../components/links";

const links = [
    {
        display: 'Home',
        link: '/'
    },
    {
        display: 'Calendar Of Events',
        link: '/calendar'
    },
    {
        display: 'Broadway',
        link: '/broadway'
    },
    {
        display: 'Lunch',
        link: '/lunch'
    },
    {
        display: 'Forms',
        link: '/forms'
    }
]

const NavBar = () => ( 
    <div className='nav_bar'>
      <Links links={links} />
    </div>
);

export default NavBar;