import React, { Component } from 'react';

import SiteLogo from '../../components/SiteLogo/index.js';

const Footer = (props) => (
    <footer>

        <div className="row row_1 full_width">
            <div className="row row_1_1">
                <SiteLogo link="#" />
            </div>

        </div>

        <div className="row row_2">

            <p>
                EU Lotto Limited, of Suite A, Ocean Village Promenade, Ocean Village, Gibraltar GX11 1AA, is licensed by the Government of Gibraltar and regulated by the Gibraltar Gambling Commissioner under the Gibraltar Gambling Act 2005 (Licences: <a href="#">RGL 085 & 066</a>), and is licensed and regulated by the Gambling Commission of Great Britain for customers in Great Britain (Licence: <a href="#">000-038991-R-319408-005</a>). EU Lotto Limited has a Remote Bookmaker’s Licence issued by the Irish National Excise Licence Office (Reference Number 1011284) for lotto betting activities in the Republic of Ireland.
            </p>

            <p>
                This website is operated by Lottoland. Lottoland passes on Player’s Bets to EU Lotto, which is acting as a bookmaker. When placing Bets, Lottoland acts in the name and on behalf of the Player.
            </p>

            <p>
                Persons under 18 years of age are not permitted to gamble.
            </p>

            <p>
                This is a real money gambling app/site. Please gamble responsibly and only bet what you can afford. For gambling addiction help and support, please contact Gamble Aware at 0808 8020 133 or visit <a href="#">https://www.begambleaware.org/</a>.
            </p>

            <p>
                EuroJackpot - check the official results and winning numbers
            </p>


        </div>

    </footer>
);

export default Footer;