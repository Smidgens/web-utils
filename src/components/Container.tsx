import React, { FC, CSSProperties } from "react";
import styled from "styled-components";

const defaultOptions:Required<CreateOptions> = {
	fluid:false,
};

export class Container {

	static get Default():ContainerFC {
		return defaultContainer;
	}

	static getCustom(options:CreateOptions = {}):ContainerFC {
		return createContainer(options);
	}
}


type CreateOptions = {
	fluid?:boolean;
};

const createContainer = (options:CreateOptions = {}):ContainerFC => {

	const {
		fluid,
	} = {
		...defaultOptions,
		...options
	};

	const ccls = fluid ? "container-fluid" : "container";
	const c:ContainerFC = (props) => {
		const cls = `${props.className} ${ccls}`;
		return (
			<Root className={cls} style={props.style || {}}>
				{ props.children }
			</Root>
		);
	};
	return c;
};

const defaultContainer = createContainer({})

type ContainerFC = FC<{
	style?:CSSProperties;
	className?:string;
	children:React.ReactNode;
}>;

const Root = styled.div`
	width:100%;
	padding-left:1em;
	padding-right:1em;
`;