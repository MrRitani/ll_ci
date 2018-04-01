import React, { Component } from 'react';

import logo_1 from '../../images/1.png';
import logo_2 from '../../images/2.png';
import logo_3 from '../../images/3.png';
import logo_4 from '../../images/4.png';
import logo_5 from '../../images/5.png';

const TrustGrid = (props) => (

    <ul className="trustGrid">
        <li><img src={logo_1} /></li>
        <li><img src={logo_2} /></li>
        <li><a href="https://www.gibraltar.gov.gi/new/remote-gambling" target="_blank"><img title="Gibraltar.GOV" src={logo_3} /></a></li>
        <li><a href="http://gbga.gi/our-members/lottoland/" target="_blank"><img title="GBGA" src={logo_4} /></a></li>
        <li><a href="https://www.lottoland.com/en/lotto-betting" target="_blank"><img title="LottoLand" src={logo_5} /></a></li>
    </ul>
);

export default TrustGrid;