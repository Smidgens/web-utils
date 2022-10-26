import { CopyBox, Container, Icon } from "$components";
import { Box } from "@ui";
import { GUID } from "@utils";
import { FC, useState } from "react";
import styled from "styled-components";

const COPY_MSG = "Copied to clipboard";

const Page:FC = () => {

	const [ guid, setGUID ] = useState(GUID.getGUID()); // current guid
	const [ msg, setMsg ] = useState("-"); // info msg

	// re-generate guid
	const refreshGUID = () => {
		setGUID(GUID.getGUID());
		setMsg("-");
	};
	
	// after copying
	const handleCopied = () => {
		setMsg(COPY_MSG);
	};
	
	const msgCls = `${ msg.length > 1 ? "show" : "" }`;

	return (
		<Root>
			<Container.Default>

				<TitleHeading>
					Generate GUID
				</TitleHeading>

				<InputGroup>
					<IconButton
					icon="cog"
					onClick={ refreshGUID }
					/>
					<CopyBox
					text={ guid }
					onCopied={ handleCopied }
					/>
				</InputGroup>

				<InfoMsg
				className={ msgCls }
				>

					{ msg }
				</InfoMsg>

			</Container.Default>
		</Root>
	);
};


const TitleHeading = styled.h1`

	text-align: center;
	font-weight: bold;
`;


const InfoMsg = styled.div`
	display: flex;
	justify-content: right;
	opacity:0;
	
	&.show {
		opacity:0.6;
	}

`;

const IconButton:FC<{
	icon:string;
	onClick?:Function;
}> = props => {


	return (
		<StyledButton
		onClick={ () => {
			if(props.onClick){
				props.onClick();
			}
		} }
		>

			<IconWrapper>
				<Icon
				name={ props.icon }
				/>
			</IconWrapper>

		</StyledButton>
	);

};

const IconWrapper = styled.div`
	width:1em;
	height:1em;

	filter:invert(1);
`;


const StyledButton = styled.button`
	margin-right:0.25em;
	cursor:pointer;
`;

const InputGroup = styled.div`
	display:flex;
`;


const Root = styled(Box.Abs)`
	display:flex;
	justify-content: center;
	align-items: center;
`;

export default Page;