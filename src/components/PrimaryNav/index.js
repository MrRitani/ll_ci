import React, { Component } from 'react';


const PrimaryNav = (props) => {

    return (
        <ul className="primaryNav">
            <li>
                <a href="#">PowerBall</a>
            </li>
            <li>
                <a href="#">Euromillons</a>
            </li>
            <li className="selected">
                <a href="#">EuroJackpot</a>
            </li>
            <li>
                <a href="#">More Jackpots</a>
            </li>
            <li>
                <a href="#">Syndicates</a>
            </li>
            <li>
                <a href="#">Scratchcards</a>
            </li>
            <li>
                <a href="#">Instant Win</a>
            </li>
            <li>
                <a href="#">Games</a>
            </li>
        </ul>
    )
};

export default PrimaryNav;