import React, { Component } from 'react';


const Button = (props) => {

    let styleSetNum = 1;
    if( props.styleSetNum ){
        styleSetNum = props.styleSetNum;
    }
    const classes = "btn styleSet_"+ styleSetNum;

    return (
        <a className={classes} href={props.link} >
            {props.children}
        </a>
    )

};

export default Button;