const Title = (props) => {
	const TitleTag = props.titleTag;

	return <TitleTag>{props.children}</TitleTag>

};

const Header = (props) => (
	<header>
		<Title titleTag = {props.titleTag}>{props.titleName}</Title>
	</header>
);


ReactDOM.render(
	<div>
		<Header
			titleTag = 'h1'
			titleName = 'React Example Page'
		/>
	</div>,
	document.getElementById('app')
);