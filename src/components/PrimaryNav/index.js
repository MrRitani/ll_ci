import React, { Component } from 'react';


const PrimaryNav = (props) => {

    let navButtons = [
        {
            label: 'PowerBall',
            link: '#',
            is_selected: false,
            extra_notice: 'special jackpot',
        },
        {
            label: 'Euromillons',
            link: '#',
            is_selected: false,
            extra_notice: '€67 millon',
        },
        {
            label: 'EuroJackpot',
            link: '#',
            is_selected: false,
            extra_notice: '',
        },
        {
            label: 'More Jackpots',
            link: '#',
            is_selected: true,
            extra_notice: '',
        },
        {
            label: 'Syndicates',
            link: '#',
            is_selected: false,
            extra_notice: '',
        },
        {
            label: 'Scratchcards',
            link: '#',
            is_selected: false,
            extra_notice: '',
        },
        {
            label: 'Instant Win',
            link: '#',
            is_selected: false,
            extra_notice: '',
        },
        {
            label: 'Games',
            link: '#',
            is_selected: false,
            extra_notice: '',
        },
    ];
    const listItems = navButtons.map((navButton) =>
        <li className={ (navButton.is_selected)?'selected':'' } key={navButton.label.toString()}>
            <a href={navButton.link}>{ (navButton.extra_notice.length)?<span>{navButton.extra_notice}</span>:'' }{navButton.label}</a>
        </li>

    );

    return (
        <ul className="primaryNav">
            {listItems}
        </ul>
    )
};

export default PrimaryNav;