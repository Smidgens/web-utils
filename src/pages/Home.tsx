import { FC, useMemo } from "react";
import styled from "styled-components";
import { Container, CardGrid, Icon } from "$components";
import { GUID } from "@utils";
import { Link as RLink } from "react-router-dom";
import { Box } from "@ui";
import { Tool } from "$resources";

const Page:FC = () => {

	const tools = useMemo(() => Tool.all(), []);
	const dtools = tools.map(x => {

		return (
			<CardGrid.Card
			key={ GUID.getGUID() }
			>
				<Toolcard>
					<OverlayLink to={ `/${x.key}` }>
						<CardBox>
							<CenteredIco>
								<Icon name={ x.icon || "" }/>
							</CenteredIco>
							<TitleBox>
								{ x.title }
							</TitleBox>
						</CardBox>
					</OverlayLink>
				</Toolcard>
			</CardGrid.Card>
		);
	});

	return (
		<Root>
			<Container.Default>
				<CardGrid.Container>
					{ dtools }
				</CardGrid.Container>
			</Container.Default>
		</Root>
	);
};


const CenteredIco = styled.div`
	position:absolute;
	width:50%;
	height:50%;
	left:50%;
	top:15%;
	transform: translate(-50%, 0%);
	filter:invert(1);
`;

const TitleBox = styled.div`

	position:absolute;
	bottom:0;
	margin-bottom:0.5em;
	/* color:#fff; */
	display:flex;
	left:50%;
	justify-content: center;
	transform:translate(-50%,0);
	text-shadow: 1px 1px 1px #2b2b2ba2;
	font-size:1.1em;
	width:100%;
	font-weight:bold;
	text-align:center;
	/* font-size:0.7em; */
	/* white-space:nowrap; */
	/* white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis; */
`;


const Root = styled.div`
	padding-top:1em;
	padding-bottom:1em;

	display:flex;
	justify-content:center;
	align-items: center;

	height:100%;
	width:100%;
	left:0;
	top:0;
	position:absolute;
`;


const Toolcard = styled(Box.Abs)`
	/* background:#1c1c1c; */
	/* border-radius:1em; */
	/* overflow:hidden; */
	overflow:visible;
`;


const OverlayLink = styled(RLink)`
	all:unset;
	width:100%;
	height:100%;
	position:relative;
	cursor:pointer;
`;

const CardBox = styled.div`
	width:100%;
	height:100%;
	/* filter:invert(1); */
	/* filter: invert(54%) sepia(99%) saturate(2401%) hue-rotate(90deg) brightness(99%) contrast(106%); */

	/* border:1px solid #fff; */
	border:2px solid #000;
	border-radius:1em;

	&:hover {
		background:rgba(0,0,0,0.02);
		/* background:#fff2; */
		transition: .1s ease-in;
		transform:scale(1.03);
		/* transform:scale(1.05) rotate3d(0,0,0.2, 5deg); */
		z-index:100;
	}

`;


export default Page;