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
            {/*primary nav*/}
		</div>

	</header>
);

//-----END HEADER-------------------------------------------------------------------------------------------------------
//-----PAGE-------------------------------------------------------------------------------------------------------------

const Page = (props) => (
	<div className="page">

		<div className="row row_1">
			{/*secondary nav*/}
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
