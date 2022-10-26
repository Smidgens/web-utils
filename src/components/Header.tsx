import { FC } from "react";
import styled from "styled-components";
import { Box } from "@ui";
import { useLocation } from "react-router";
import { Link as RLink } from "react-router-dom";

export const Header:FC = () => {


	// hide header on home route
	if(useLocation().pathname === "/"){
		return <></>;
	}

	return (
		<Root>
			<Background/>
			<ContentRoot>
				<BackLink/>
			</ContentRoot>
		</Root>
	);
};


const BackLink:FC = () => {

	const txt = "Home";


	return (
		<StyledLink to={ "/" }>
			{ txt }
		</StyledLink>
	);
};

const StyledLink = styled(RLink)`
`;

const ContentRoot = styled(Box.Abs)`

	/* justify-content: center; */
	align-items: center;
	display:flex;

	padding: 0em 0.5em;

`;


const FlexSpace = styled.div`
	margin:auto;
`;

const Background = styled(Box.Abs)`
	/* background:#222222; */
	/* border-bottom:1px solid #fff5; */
	border-bottom:2px solid #000e;
	
	
`;

const Root = styled.div`
	width:100%;
	height:2em;
	position:relative;
`;


