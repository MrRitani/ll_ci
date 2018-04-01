import React, { Component } from 'react';


const WinnerCombination = (props) => (
    <div className="winnerCombination">
        <div className="lotteryNumber">{props.n1}</div>
        <div className="lotteryNumber">{props.n2}</div>
        <div className="lotteryNumber">{props.n3}</div>
        <div className="lotteryNumber">{props.n4}</div>
        <div className="lotteryNumber">{props.n5}</div>
        <div className="lotteryNumber extra">{props.e1}</div>
        <div className="lotteryNumber extra">{props.e2}</div>
    </div>
);

export default WinnerCombination;