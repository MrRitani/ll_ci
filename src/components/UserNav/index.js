import React, { Component } from 'react';

import Button from '../../components/Button/index.js';


const UserNav = (props) => {

    return (
        <div className="userNav">
            <Button link="#">Log In</Button>
            <Button link="#">Register</Button>
        </div>
    )
};

export default UserNav;