import React, { FC } from "react";
import styled from "styled-components";

interface IProps extends React.AllHTMLAttributes<HTMLInputElement> {

}

export const InputURL:FC<IProps> = props => {
	
	return (
		<StyledInput
		readOnly={ props.readOnly }
		/>
	);
};

const StyledInput = styled.input`


`;