import React, { Component } from 'react';


const WinnerCombinationsTable = (props) => {

    const FormettedNumber = (props) => {

        let number = props.children;
        number /= Math.pow(10, 2);

        return '€'+ number.toLocaleString('en')

    }

    //I can't receive this data via ajax because "No 'Access-Control-Allow-Origin' header is present on the requested resource"
    let dataFromLottoland = JSON.parse('{"last":{"nr":315,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 30.03.2018","day":30,"month":3,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"30.03.2018, 19:00","lateClosingDate":"30.03.2018, 20:15","drawingDate":"30.03.2018, 21:00","numbers":[5,15,17,29,32],"euroNumbers":[5,7],"jackpot":"10","marketingJackpot":"10","specialMarketingJackpot":"10","climbedSince":1,"Winners":734296,"odds":{"rank0":{"winners":0,"specialPrize":0,"prize":0},"rank1":{"winners":0,"specialPrize":0,"prize":1000000000},"rank2":{"winners":4,"specialPrize":0,"prize":34314910},"rank3":{"winners":4,"specialPrize":0,"prize":12111140},"rank8":{"winners":34670,"specialPrize":0,"prize":1440},"rank9":{"winners":33582,"specialPrize":0,"prize":1440},"rank10":{"winners":49652,"specialPrize":0,"prize":1390},"rank4":{"winners":64,"specialPrize":0,"prize":252310},"rank5":{"winners":816,"specialPrize":0,"prize":17810},"rank6":{"winners":1239,"specialPrize":0,"prize":9120},"rank11":{"winners":161496,"specialPrize":0,"prize":770},"rank7":{"winners":2673,"specialPrize":0,"prize":3620},"rank12":{"winners":450096,"specialPrize":0,"prize":680}}},"next":{"nr":316,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 06.04.2018","day":6,"month":4,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"06.04.2018, 19:00","lateClosingDate":"06.04.2018, 20:15","drawingDate":"06.04.2018, 21:00","jackpot":"16","marketingJackpot":"16","specialMarketingJackpot":"16","climbedSince":2}}');

    console.log(dataFromLottoland);


    return (
        <table className="winnerCombinationsTable">
            <thead>
                <tr>
                    <th>Tier</th>
                    <th>Match</th>
                    <th>Winners</th>
                    <th>Amount</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>I</td>
                    <td>5 Numbers <br />+ 2 Euronumbers</td>
                    <td>{ dataFromLottoland.last.odds.rank1.winners}x</td>
                    <td><FormettedNumber>{dataFromLottoland.last.odds.rank1.prize}</FormettedNumber></td>
                </tr>

                <tr>
                    <td>II</td>
                    <td>5 Numbers <br />+ 1 Euronumbers</td>
                    <td>{ dataFromLottoland.last.odds.rank2.winners}x</td>
                    <td><FormettedNumber>{dataFromLottoland.last.odds.rank2.prize}</FormettedNumber></td>
                </tr>

                <tr>
                    <td>III</td>
                    <td>5 Numbers <br />+ 0 Euronumbers</td>
                    <td>{ dataFromLottoland.last.odds.rank3.winners}x</td>
                    <td><FormettedNumber>{dataFromLottoland.last.odds.rank3.prize}</FormettedNumber></td>
                </tr>

                <tr>
                    <td>IV</td>
                    <td>4 Numbers <br />+ 2 Euronumbers</td>
                    <td>{ dataFromLottoland.last.odds.rank4.winners}x</td>
                    <td><FormettedNumber>{dataFromLottoland.last.odds.rank4.prize}</FormettedNumber></td>
                </tr>
            </tbody>

        </table>

    )


};

export default WinnerCombinationsTable;