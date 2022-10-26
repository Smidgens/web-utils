import { CopyBox, Container, Icon } from "$components";
import { Box, Input } from "@ui";
import { Dropbox, GUID } from "@utils";
import { FC, useState } from "react";
import styled from "styled-components";

const PLACEHOLDER = "https://www.dropbox.com/s/<id>";

const ABOUT = `
Converts a share link to a direct download format.

`.trim();


const Page:FC = () => {

	const [ msg, setMsg ] = useState("-"); // info msg
	const [ url, setUrl ] = useState("");
	const [ directLink, setDirect ] = useState("");
	
	// after copying
	const handleCopied = () => {
		// setMsg(COPY_MSG);
	};

	// 
	const handleBlur = () => {

		var u = url.trim();

		if(u.length === 0){
			setMsg("-");
			setDirect("");
			return;
		}


		if(!Dropbox.isShareLink(u)){
			setMsg("Unable to parse share link");
			setDirect("");
			return;
		}
		setMsg("-");

		setDirect(Dropbox.getDirectLink(url));
	};

	const msgCls = `${ msg.length > 1 ? "show" : "" }`;

	return (
		<Root>
			<Container.Default>

				<TitleHeading>
					Format Dropbox Link
				</TitleHeading>

				<AboutBox>
					{ ABOUT }
				</AboutBox>

				<Input.Text
				value={ url }
				onChange={ e => {
					setUrl(e.currentTarget.value);
				} }
				onBlur={ handleBlur }
				onSubmit={  handleBlur }
				onKeyDown={ e => {

					if(e.key === "Enter" || e.key === "Tab"){
						handleBlur();
					}

				}}
				placeholder={ PLACEHOLDER }
				/>

				<VSpace/>

				<InputGroup>
					<CopyBox
					text={ directLink }
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

const AboutBox = styled.div`

	border:1px solid #0002;
	padding:0.5em;
	text-align:center;
	color:#0009;
	margin-bottom:1em;

	border-radius:0.25em;
`;

const VSpace = styled.div`
	height:0.5em;
`;

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