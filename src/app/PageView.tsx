import{ FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@ui";
import { Header } from "$components";
import * as Pages from "$pages";

const routes = [
	{
		name:"Home",
		path:"/",
		component:Pages.Home,
	},
	{
		name:"Tool",
		path:"/:id",
		component:Pages.Tool,
	},
];

export const PageView:FC = () => {
	return (
		<Root>
			<Header/>
			<FlexFill>
				<ScrollView>
					<PageWrapper>
						<RouteView/>
					</PageWrapper>
				</ScrollView>
			</FlexFill>
		</Root>
	);
};

const RouteView: FC = () => {
	var droutes = routes.map(x => {
		var Component = x.component;
		return (
			<Route path={x.path} key={x.name} element={<Component/>}/>
		)
	});

	return (
		<Routes>
			{ droutes }
			{ getFallback() }
		</Routes>
	);
};

const getFallback = () => <Route path="*" element={<Navigate to="/" replace />} />;

const Root = styled(Box.Abs)`
	overflow:hidden;
	display:flex;
	flex-direction: column;
`;

const PageWrapper = styled.div`
	overflow: hidden;
	position:relative;
	min-height: 100%;
`;

const FlexFill = styled.div`
	flex: 1 1 auto;
	position:relative;
	overflow: hidden;
`;

const ScrollView = styled(Box.Abs)`
	overflow:auto;
	/* background:#1c1c1c; */
	/* background:#ebf1d3; */

`;