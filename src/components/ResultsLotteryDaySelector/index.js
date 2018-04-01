import React, { Component } from 'react';


const ResultsLotteryDaySelector = (props) => (
    <div className="resultsLotteryDaySelector">
        <select className="dateSelector">
            <option>Please Select Date</option>
        </select>

        <select className="yearSelector">
            <option>Please Select Year</option>
            <option>2016</option>
            <option>2017</option>
            <option selected>2018</option>
        </select>
    </div>
);

export default ResultsLotteryDaySelector;