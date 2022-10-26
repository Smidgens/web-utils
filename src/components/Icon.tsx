// smidgens @ github

import { FC, useMemo } from "react";
import styled from "styled-components";
import { Box } from "@ui";
import { Resources } from "$resources";
export const Icon:FC<{
	name:string;
}> = props => {
	const Component = useMemo(() => {
		return Resources.findSprite(props.name);
	}, [ props.name ])

	return (
		<Component/>
	);
};

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


