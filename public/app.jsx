//-----SITELOGO---------------------------------------------------------------------------------------------------------

const SiteLogo = (props) => {

	return (
		<a href={props.link}>
			<img src={'images/lottoland.svg'}/>
		</a>
	)
};

//-----END SITELOGO-----------------------------------------------------------------------------------------------------
//-----HEADER-----------------------------------------------------------------------------------------------------------

const Header = (props) => (
	<header>

		<div className="row row_1">
			{/*logo*/}
			<SiteLogo link="#" />

			{/*user nav*/}
		</div>

		<div className="row row_2">
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
