import { Box } from "@ui";
import { FC } from "react";
import styled from "styled-components";

const Page:FC = () => {
	return (
		<ErrorView/>
	);
};

const ErrorView = styled(Box.Abs)`
	background:#f00;
`;

export default Page;