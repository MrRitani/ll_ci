import React, { Component } from 'react';

import logo from '../../images/lottoland.svg';


const SiteLogo = (props) => {

    return (
        <a className="siteLogo" href={props.link}>
            <img src={logo}/>
        </a>
    )
};

export default SiteLogo;