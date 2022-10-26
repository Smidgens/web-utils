import { FC } from "react";
import styled from "styled-components";
import { Tool } from "$resources";
import { useParams } from "react-router";
import * as Errors from "$errors";

const Page:FC = () => {

	var { id } = useParams();
	
	if(!id){
		return <Errors._404/>;
	}

	var t = Tool.get(id);

	if(!t){
		return <Errors._404/>;
	}

	var TComponent = t.component;

	return (
		<Root>
			<TComponent/>
		</Root>
	);
};


const Root = styled.div`
	
`;

export default Page;