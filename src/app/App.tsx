import { FC } from "react";
import styled from "styled-components";
import { Box } from "@ui";

import { PageView } from "./PageView";
export const App:FC = () => {
	
	return (
		<Root>
			<PageView/>
		</Root>
	);
};

const Root = styled(Box.Abs)`
	overflow:hidden;
	display:flex;
`;

const VDivider = styled.div`
	width:2px;
	background:#fff;
	height:100%;
`;

const SidebarColumn = styled.div`
	overflow:visible;
`;

const ViewportColumn = styled.div`
	flex:1 1;
	background:#323537;
`;