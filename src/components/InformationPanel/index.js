import React, { Component } from 'react';


const InformationPanel = (props) => (
    <div className="informationPanel">

        <h4>{props.title}</h4>
        <p>{props.children}</p>

    </div>
);

export default InformationPanel;