import React, { Component } from "react";
import ReactDOM from "react-dom";
import Top from './top';

const page = ({widget}) => (
    <div>
        <Top />
        <div className='page__widget'>
            {widget}
        </div>
    </div>
);

export default page;