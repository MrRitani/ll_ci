import React, { Component } from 'react';

import SiteLogo from '../../components/SiteLogo/index.js';

const Footer = (props) => (
    <footer>

        <div className="row row_1">
            {/*grid images links*/}
        </div>

        <div className="row row_2">
            {/*grid lists links*/}
        </div>

        <div className="row row_3 full_width">
            <div className="row row_3_1">
                <SiteLogo link="#" />
            </div>

            {/*site rewards*/}
        </div>

        <div className="row row_4">
            {/*legal*/}
        </div>

    </footer>
);

export default Footer;