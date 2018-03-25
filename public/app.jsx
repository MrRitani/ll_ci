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

const SecondaryNav = (props) => {

    return (
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
    )
};

//-----END SECONDARY NAV------------------------------------------------------------------------------------------------
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

const Page = (props) => (
	<div className="page">

		<div className="row row_1">
			{/*secondary nav*/}
			<SecondaryNav />
		</div>

		<div className="row row_2">
            {/* title with selector*/}
		</div>

		<div className="row row_3">
            {/*results title*/}
		</div>

		<div className="row row_4">
            {/*main result*/}
		</div>

		<div className="row row_5">
            {/*results*/}
            {/*information panel */}
            {/*information panel 2*/}
		</div>

		<div className="row row_6">
            {/*breadcrumbs*/}
		</div>

	</div>
);

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

		<div className="row row_3">
            {/*site logo*/}
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
