import { Box } from "@ui";
import { FC } from "react";
import styled from "styled-components";
export class CardGrid {
	static get Container(){ return ContainerWrapper; }
	static get Card(){ return CardComponent; }
}

const CardComponent:FC<{

	children?:any;
	cols?:number;
}> = (props) => {

	return (
		<CardWrapper>
			<Box.Ratio ratio={100}>
				<CardContent>
					<CardInner>
						{ props.children }
					</CardInner>
				</CardContent>
			</Box.Ratio>
		</CardWrapper>
	);
};

const ContainerWrapper = styled.div`
	width:100%;
	/* background:blue; */
	position:relative;
	word-spacing: -1;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const CardContent = styled.div`
	padding:3%;
	position:relative;
	width:100%;
	height:100%;
	/* background:purple; */
	margin:auto;
`;

const CardInner = styled.div`
	width:100%;
	height:100%;
	position:relative;
`;

const CardWrapper = styled.div`
	width:${(100/6.0) * 1}%;
	position:relative;
	display:inline-block;
	margin:0;
	word-spacing: -1;
	vertical-align:bottom;
`;