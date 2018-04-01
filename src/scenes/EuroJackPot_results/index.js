import React, { Component } from 'react';

import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

import SecondaryNav from '../../components/SecondaryNav/index.js';
import ResultsLotteryDaySelector from '../../components/ResultsLotteryDaySelector/index.js';
import WinnerCombination from '../../components/WinnerCombination/index.js';
import WinnerCombinationsTable from '../../components/WinnerCombinationsTable/index.js';
import InformationPanel from '../../components/InformationPanel/index.js';
import Breadcrumbs from '../../components/Breadcrumbs/index.js';
import TrustGrid from '../../components/TrustGrid/index.js';
import PaymentGrid from '../../components/PaymentGrid/index.js';

const EuroJackPot_results = (props) => {

    //I can't receive this data via ajax because "No 'Access-Control-Allow-Origin' header is present on the requested resource"
    let dataFromLottoland = JSON.parse('{"last":{"nr":315,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 30.03.2018","day":30,"month":3,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"30.03.2018, 19:00","lateClosingDate":"30.03.2018, 20:15","drawingDate":"30.03.2018, 21:00","numbers":[5,15,17,29,32],"euroNumbers":[5,7],"jackpot":"10","marketingJackpot":"10","specialMarketingJackpot":"10","climbedSince":1,"Winners":734296,"odds":{"rank0":{"winners":0,"specialPrize":0,"prize":0},"rank1":{"winners":0,"specialPrize":0,"prize":1000000000},"rank2":{"winners":4,"specialPrize":0,"prize":34314910},"rank3":{"winners":4,"specialPrize":0,"prize":12111140},"rank8":{"winners":34670,"specialPrize":0,"prize":1440},"rank9":{"winners":33582,"specialPrize":0,"prize":1440},"rank10":{"winners":49652,"specialPrize":0,"prize":1390},"rank4":{"winners":64,"specialPrize":0,"prize":252310},"rank5":{"winners":816,"specialPrize":0,"prize":17810},"rank6":{"winners":1239,"specialPrize":0,"prize":9120},"rank11":{"winners":161496,"specialPrize":0,"prize":770},"rank7":{"winners":2673,"specialPrize":0,"prize":3620},"rank12":{"winners":450096,"specialPrize":0,"prize":680}}},"next":{"nr":316,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 06.04.2018","day":6,"month":4,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"06.04.2018, 19:00","lateClosingDate":"06.04.2018, 20:15","drawingDate":"06.04.2018, 21:00","jackpot":"16","marketingJackpot":"16","specialMarketingJackpot":"16","climbedSince":2}}');

    return(

        <div>
            <Header />

            <div className="page pageWinningResults">

                <div className="row row_1">
                    <SecondaryNav />
                </div>

                <div className="row row_2">
                    <h1 className="sectionTitle">EUROJACKPOT RESULTS & WINNING NUMBERS</h1>

                    <ResultsLotteryDaySelector />

                    <br className="clear" />
                </div>

                <div className="row row_3">
                    <h2 className="sectionTitle">EuroJackpot Results for <span>{dataFromLottoland.last.date['dayOfWeek']} {dataFromLottoland.last.date['day']} {dataFromLottoland.last.date['month']} {dataFromLottoland.last.date['year']}</span></h2>

                    <WinnerCombination
                        n1 = {dataFromLottoland.last.numbers[0]}
                        n2 = {dataFromLottoland.last.numbers[1]}
                        n3 = {dataFromLottoland.last.numbers[2]}
                        n4 = {dataFromLottoland.last.numbers[3]}
                        n5 = {dataFromLottoland.last.numbers[4]}

                        e1 = {dataFromLottoland.last.euroNumbers[0]}
                        e2 = {dataFromLottoland.last.euroNumbers[1]}
                    />

                </div>

                <div className="row row_4">
                    <WinnerCombinationsTable />

                    <div className="informationPanels">

                        <InformationPanel title="The EuroJackpot numbers for 30.03.2018">The 315th draw for the EuroJackpot was held on 30.03.2018, as usual at 9pm in Helsinki.</InformationPanel>

                        <InformationPanel title="EuroJackpot numbers for 30.03.2018">The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland. <br /><br />Lottoland published the draw results immediately after the draw on 30.03.2018. You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.</InformationPanel>


                    </div>

                </div>

                <div className="row row_5 full_width">
                    <div className="row row_5_1">
                        <Breadcrumbs />
                    </div>

                    <div className="row row_5_2">
                        <TrustGrid />
                    </div>
                </div>

                <div className="row row_6">

                    <div className="row row_6_1">
                        <PaymentGrid />
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
};

export default EuroJackPot_results;