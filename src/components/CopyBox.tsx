// smidgens @ github

import React, { FC, useMemo, useRef } from "react";
import styled from "styled-components";
import { Box, Input } from "@ui";
import { Resources } from "$resources";
import { CBoard } from "@utils";

export const CopyBox:FC<{
	text:string;
	large?:boolean;
	innerRef?:any
	onCopied?:Function
}> = props => {

	const el = React.useRef<HTMLInputElement>();

	const handleCopy = () => {
		if(!el.current){ return; }
		el.current.select();
		CBoard.CopySelected();

		if(props.onCopied){
			props.onCopied();
		}
	};

	return (
		<Root>
			<StyledInput
			innerRef={ el }
			value={props.text}
			readOnly
			onClick={ () => handleCopy() }
			/>
		</Root>
	);
};


const StyledInput = styled(Input.Text)`
	cursor:pointer;
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
	position:relative;
	display:flex;
`;


