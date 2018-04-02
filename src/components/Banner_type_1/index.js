import React, { Component } from 'react';

import logo from '../../images/syndicates_60x60.png';


const Banner_type_1 = (props) => {

    return (
        <a className="headerBanner hide_on_768" href={props.link} >
            <img src={logo} />
            <p>{props.children}</p>
            <div>{props.callToAction}</div>
        </a>
    )
};

export default Banner_type_1;