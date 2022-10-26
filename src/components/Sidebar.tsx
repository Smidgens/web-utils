import { FC } from "react";
import styled from "styled-components";

export class Sidebar {

	static get Container(){
		return SidebarContainer;
	}

	static get Item(){
		return SidebarItem;
	}

	private constructor(){}
}

const SidebarItem:FC<{
	icon?:string;
	text:string;
	active?:boolean;
	onClick?:Function;
}> = props => {

	const cls = `
		${ props.active ? "active" : "" }
	`;

	const handleClick = () => {
		if(props.onClick){
			props.onClick();
		}
	};

	return (
		<ItemWrapper className={ cls }
		onClick={ handleClick }
		>
			<ItemIcon>
				{ props.icon }
			</ItemIcon>

			<ItemText>
				{ props.text }
			</ItemText>
			
		</ItemWrapper>
	);
};

interface ISidebarContainer extends React.AllHTMLAttributes<HTMLDivElement> {

}

const SidebarContainer:FC<ISidebarContainer> = props => {
	return (
		<ContainerWrapper>
			{ props.children }
		</ContainerWrapper>
	);
};

const ItemText = styled.span`
	margin-left:0.5em;
	margin-right:0.5em;
	white-space:nowrap;
`;

const ItemIcon = styled.div`
	width:1em;
	height:1em;
	border:1px solid #000;
	background:#fff;
	border-radius:0.25em;
`;

const ItemWrapper = styled.button`
	
	all:unset;
	width:100%;
	padding:0.2em;
	border-bottom:2px solid #fff;

	justify-items: center;
	align-items:center;

	display:flex;

	font-size: 1.3em;

	color:#fff;

	&.active {
		background:#fff;
		color:#000;
	}
	

	&:not(.active):hover {
		cursor:pointer;
		background:#fff5;
	}

`;


const ContainerWrapper = styled.div`
	width:100%;
	height:100%;
	overflow-x:hidden;
	overflow-y:auto;
	background:#1d1d1d;
	/* border-right:3px solid #fff; */
`;