import React, { Component } from 'react';

import logo_1 from '../../images/visa.png';
import logo_2 from '../../images/mastercard.png';
import logo_3 from '../../images/paysafe.png';
import logo_4 from '../../images/neteller.png';
import logo_5 from '../../images/skrill.png';

const PaymentGrid = (props) => (

    <ul className="paymentGrid">
        <li><img src={logo_1} /></li>
        <li><img src={logo_2} /></li>
        <li><img src={logo_3} /></li>
        <li><img src={logo_4} /></li>
        <li><img src={logo_5} /></li>
    </ul>
);

export default PaymentGrid;