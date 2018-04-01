import React, { Component } from 'react';

import SiteLogo from '../../components/SiteLogo/index.js';
import HeaderBanner from '../../components/Banner_type_1/index.js';
import UserNav from '../../components/UserNav/index.js';
import PrimaryNav from '../../components/PrimaryNav/index.js';


const Header = (props) => (
    <div>
        <header>

            <div className="row row_1">
                {/*logo*/}
                <SiteLogo link="#" />

                {/*header banner*/}
                <HeaderBanner link="#" callToAction="Play Now !" >Boost your winning chances!<br/>Check out the Lottoland syndicates</HeaderBanner>

                {/*user nav*/}
                <UserNav isLogged="" />

            </div>

            <div className="row row_2 full_width">
                <div className="row row_2_1">
                    {/*primary nav*/}
                    <PrimaryNav />
                </div>
            </div>

        </header>

        <div className="header_spacer" />

    </div>

);

export default Header;