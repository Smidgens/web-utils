import React, { FC } from "react";
import styled from "styled-components";

interface IProps extends React.AllHTMLAttributes<HTMLInputElement> {

	innerRef?:any
}

export const InputText:FC<IProps> = props => {

	const cls = `${props.className}`;

	const iprops = {
		...props
	};

	iprops.type = "text";
	iprops.className = `${iprops.className} `;

	return (
		<StyledInput
		{ ...(props as any) }
		ref={ props.innerRef }
		type={"text"}
		className={ cls }
		/>
	);
};

const StyledInput = styled.input`


`;