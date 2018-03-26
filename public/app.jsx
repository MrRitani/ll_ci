//-----DATA-------------------------------------------------------------------------------------------------------------

function dataFromLottoland(){
    //I can't receive this data via ajax because "No 'Access-Control-Allow-Origin' header is present on the requested resource"
    let lastResultsJson = '{"last":{"nr":314,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 23.03.2018","day":23,"month":3,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"23.03.2018, 19:00","lateClosingDate":"23.03.2018, 20:15","drawingDate":"23.03.2018, 21:00","numbers":[4,14,22,33,42],"euroNumbers":[1,10],"jackpot":"17","marketingJackpot":"17","specialMarketingJackpot":"17","climbedSince":2,"Winners":584750,"odds":{"rank0":{"winners":0,"specialPrize":0,"prize":0},"rank1":{"winners":1,"specialPrize":0,"prize":1746147880},"rank2":{"winners":7,"specialPrize":0,"prize":42522060},"rank3":{"winners":8,"specialPrize":0,"prize":6705160},"rank8":{"winners":21688,"specialPrize":0,"prize":2550},"rank9":{"winners":25671,"specialPrize":0,"prize":2080},"rank10":{"winners":63409,"specialPrize":0,"prize":1230},"rank4":{"winners":55,"specialPrize":0,"prize":325090},"rank5":{"winners":695,"specialPrize":0,"prize":23150},"rank6":{"winners":1860,"specialPrize":0,"prize":6750},"rank11":{"winners":112488,"specialPrize":0,"prize":1230},"rank7":{"winners":1581,"specialPrize":0,"prize":6750},"rank12":{"winners":357287,"specialPrize":0,"prize":950}}},"next":{"nr":315,"currency":"EUR","date":{"full":"Die Lottozahlen vom Freitag, den 30.03.2018","day":30,"month":3,"year":2018,"hour":21,"minute":0,"dayOfWeek":"Freitag"},"closingDate":"30.03.2018, 19:00","lateClosingDate":"30.03.2018, 20:15","drawingDate":"30.03.2018, 21:00","jackpot":"10","marketingJackpot":"10","specialMarketingJackpot":"10","climbedSince":1}}';
    return JSON.parse(lastResultsJson);
}

//-----END DATA---------------------------------------------------------------------------------------------------------
//-----SITELOGO---------------------------------------------------------------------------------------------------------

const SiteLogo = (props) => {

	return (
		<a className="siteLogo" href={props.link}>
			<img src={'images/lottoland.svg'}/>
		</a>
	)
};

//-----END SITELOGO-----------------------------------------------------------------------------------------------------
//-----BUTTON-----------------------------------------------------------------------------------------------------------

const Button = (props) => {

	let styleSetNum = 1;
	if( props.styleSetNum ){
        styleSetNum = props.styleSetNum;
	}
	const classes = "btn styleSet_"+ styleSetNum;

    return (
		<a className={classes} href={props.link} >
            {props.children}
		</a>
	)

};

//-----END BUTTON-------------------------------------------------------------------------------------------------------
//-----HEADER BANNER----------------------------------------------------------------------------------------------------

const HeaderBanner = (props) => {

    return (
		<a className="headerBanner" href={props.link} >
			<img src={'images/syndicates_60x60.png'} />
			<p>{props.children}</p>
			<div>{props.callToAction}</div>
		</a>
    )
};

//-----END HEADER BANNER------------------------------------------------------------------------------------------------
//-----USER NAV---------------------------------------------------------------------------------------------------------

const UserNav = (props) => {

    return (
		<div className="userNav">
			<Button link="#">Log In</Button>
			<Button link="#">Register</Button>
		</div>
    )
};

//-----END USER NAV-----------------------------------------------------------------------------------------------------
//-----PRIMARY NAV------------------------------------------------------------------------------------------------------

const PrimaryNav = (props) => {

    return (
		<ul className="primaryNav">
			<li>
				<a href="#">PowerBall</a>
			</li>
			<li>
				<a href="#">Euromillons</a>
			</li>
			<li className="selected">
				<a href="#">EuroJackpot</a>
			</li>
			<li>
				<a href="#">More Jackpots</a>
			</li>
			<li>
				<a href="#">Syndicates</a>
			</li>
			<li>
				<a href="#">Scratchcards</a>
			</li>
			<li>
				<a href="#">Instant Win</a>
			</li>
			<li>
				<a href="#">Games</a>
			</li>
		</ul>
    )
};

//-----END PRIMARY NAV--------------------------------------------------------------------------------------------------
//-----SECONDARY NAV----------------------------------------------------------------------------------------------------

const SecondaryNav = (props) => (
	<ul className="secondaryNav">
		<li>
			<a href="#">EuroJackpot</a>
		</li>
		<li className="selected">
			<a href="#">EuroJackpot Results & Prize Breakdown</a>
		</li>
		<li>
			<a href="#">EuroJackpot Help y Faq</a>
		</li>
	</ul>
);

//-----END SECONDARY NAV------------------------------------------------------------------------------------------------
//-----RESULTS LOTTERY DAY SELECTOR-------------------------------------------------------------------------------------

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

//-----END RESULTS LOTTERY DAY SELECTOR---------------------------------------------------------------------------------
//-----WINNER COMBINATION-----------------------------------------------------------------------------------------------

const WinnerCombination = (props) => (
	<div className="winnerCombination">
		<div className="lotteryNumber">{props.n1}</div>
		<div className="lotteryNumber">{props.n2}</div>
		<div className="lotteryNumber">{props.n3}</div>
		<div className="lotteryNumber">{props.n4}</div>
		<div className="lotteryNumber">{props.n5}</div>
		<div className="lotteryNumber extra">{props.e1}</div>
		<div className="lotteryNumber extra">{props.e2}</div>
	</div>
);

//-----END WINNER COMBINATION-------------------------------------------------------------------------------------------
//-----WINNER COMBINATIONS TABLE----------------------------------------------------------------------------------------

const WinnerCombinationsTableRow = (props) => (
	<div></div>
);

const WinnerCombinationsTable = (props) => {

	//I can't receive this data via ajax because "No 'Access-Control-Allow-Origin' header is present on the requested resource"
	let lastResults = dataFromLottoland()
	console.log(lastResults);

    return (
    	<table className="winnerCombinationsTable">
			<tr>
				<th>Tier</th>
				<th>Match</th>
				<th>Winners</th>
				<th>Amount</th>
			</tr>

			<tr>
				<td>none</td>
				<td>none</td>
				<td>none</td>
				<td>none</td>
			</tr>
		</table>

	)


};

//-----END WINNER COMBINATIONS TABLE------------------------------------------------------------------------------------
//-----INFORMATION PANEL------------------------------------------------------------------------------------------------

const InformationPanel = (props) => (
	<div className="informationPanel">

		<h4>{props.title}</h4>
		<p>{props.children}</p>

	</div>
);

//-----END INFORMATION PANEL--------------------------------------------------------------------------------------------
//-----BREADCRUMBS------------------------------------------------------------------------------------------------------

const Breadcrumbs = (props) => (

		<ol className="breadcrumbs">
			<li><a href="#">Lottoland</a></li>
			<li><a href="#">EuroJackpot</a></li>
			<li>EuroJackpot Results &amp; Winning Numbers</li>
		</ol>
);

//-----END BREADCRUMBS--------------------------------------------------------------------------------------------------
//-----HEADER-----------------------------------------------------------------------------------------------------------

const Header = (props) => (
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
);

//-----END HEADER-------------------------------------------------------------------------------------------------------
//-----PAGE-------------------------------------------------------------------------------------------------------------

const Page = (props) => {
    let lastResults = dataFromLottoland()


	return(
		<div className="page pageWinningResults">

			<div className="row row_1">
				{/*secondary nav*/}
				<SecondaryNav />
			</div>

			<div className="row row_2">
				{/* title*/}
				<h1 className="sectionTitle">EUROJACKPOT RESULTS & WINNING NUMBERS</h1>

				<ResultsLotteryDaySelector />

				<br className="clear" />
				{/*<hr />*/}
			</div>


			<div className="row row_3">
				{/*results title*/}
				<h2 className="sectionTitle">EuroJackpot Results for <span>{lastResults.last.date['dayOfWeek']} {lastResults.last.date['day']} {lastResults.last.date['month']} {lastResults.last.date['year']}</span></h2>

				{/*main result*/}
				<WinnerCombination
					n1 = {lastResults.last.numbers[0]}
					n2 = {lastResults.last.numbers[1]}
					n3 = {lastResults.last.numbers[2]}
					n4 = {lastResults.last.numbers[3]}
					n5 = {lastResults.last.numbers[4]}
					e1 = {lastResults.last.euroNumbers[0]}
					e2 = {lastResults.last.euroNumbers[1]}
				/>

			</div>

			<div className="row row_4">
				{/*results*/}
				<WinnerCombinationsTable />

				<div className="informationPanels">

                    {/*information panel */}
					<InformationPanel title="EuroJackpot numbers for 23.03.2018">The 314th draw for the EuroJackpot was held on 23.03.2018, as usual at 9pm in Helsinki.</InformationPanel>


                    {/*information panel 2*/}
					<InformationPanel title="The EuroJackpot numbers for 23.03.2018">The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.<br/>Lottoland published the draw results immediately after the draw on 23.03.2018. You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.</InformationPanel>


				</div>

			</div>

			<div className="row row_5 full_width">
				<div className="row row_5_1">
                    {/*breadcrumbs*/}
					<Breadcrumbs />
				</div>
			</div>

		</div>
	)
};

//-----END PAGE---------------------------------------------------------------------------------------------------------
//-----FOOTER-----------------------------------------------------------------------------------------------------------

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
                {/*site logo*/}
				<SiteLogo link="#" />
			</div>

            {/*site rewards*/}
		</div>

		<div className="row row_4">
            {/*legal*/}
		</div>

	</footer>
);

//-----END FOOTER-------------------------------------------------------------------------------------------------------
//-----APP RENDER-------------------------------------------------------------------------------------------------------

ReactDOM.render(
	<div>
		<Header />
		<Page />
		<Footer />
	</div>,
    document.getElementById('app')
);

//-----END APP RENDER---------------------------------------------------------------------------------------------------
