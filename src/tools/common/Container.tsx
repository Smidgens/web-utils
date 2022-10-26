// smidgens @ github

import { FC } from "react";
import { Container as CContainer } from "$components";
import styled from "styled-components";

export const Container:FC<{
	children?:any;
}> = props => {

	return (
		<Root>
			<CContainer.Default>
				{ props.children }
			</CContainer.Default>
		</Root>
	);
	
};



const Root = styled.div`
	padding:1em 0em;
`;