import React, { Component } from 'react';


const ResultsLotteryDaySelector = (props) => {

    this.state = {value: ''};

    this.dateSelectorOptionState = '';
    this.yearSelectorOptionState = '';

    let dateSelectorOptions = [
        {
            label: 'Please Select Date',
            is_selected: false
        },
        {
            label: 'Fri 30 Mar',
            is_selected: true
        },
        {
            label: 'Fri 23 Mar',
            is_selected: false
        },
        {
            label: 'Fri 16 Mar',
            is_selected: false
        },
        {
            label: 'Fri 09 Mar',
            is_selected: false
        },

    ];

    const $dateSelectorOptions = dateSelectorOptions.map((dateSelectorOption) =>
        {

            if(dateSelectorOption.is_selected)
            {
                this.dateSelectorOptionState = dateSelectorOption.label
            }

            return(
                <option selected={dateSelectorOption.is_selected} key={dateSelectorOption.label}>{dateSelectorOption.label}</option>
            )
        }

    );


    let yearSelectorOptions = [
        {
            label: 'Please Select Year',
            is_selected: false
        },
        {
            label: '2018',
            is_selected: true
        },
        {
            label: '2017',
            is_selected: false
        },
        {
            label: '2016',
            is_selected: false
        },
        {
            label: '2015',
            is_selected: false
        },

    ];

    const $yearSelectorOptions = yearSelectorOptions.map((yearSelectorOption) =>
        {

            if(yearSelectorOption.is_selected)
            {
                this.yearSelectorOptionState = yearSelectorOption.label
            }

            return(
                <option selected={yearSelectorOption.is_selected} key={yearSelectorOption.label}>{yearSelectorOption.label}</option>
            )
        }

    );

    return(
        <div className="resultsLotteryDaySelector">
            <select defaultValue={this.dateSelectorOptionState} className="dateSelector">
                {$dateSelectorOptions}
            </select>

            <select defaultValue={this.yearSelectorOptionState} className="yearSelector">
                {$yearSelectorOptions}
            </select>
        </div>
    )
};

export default ResultsLotteryDaySelector;