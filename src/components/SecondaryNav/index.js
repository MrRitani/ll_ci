import React, { Component } from 'react';


const SecondaryNav = (props) => (
    <ul className="secondaryNav">
        <li>
            <a href="#">EuroJackpot</a>
        </li>
        <li className="selected">
            <a href="#">EuroJackpot Results & Prize Breakdown</a>
        </li>
        <li>
            <a href="#">EuroJackpot Help y Faq</a>
        </li>
    </ul>
);

export default SecondaryNav;