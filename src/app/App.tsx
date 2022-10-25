import { FC } from "react";
import styled from "styled-components";
import { Box } from "@ui";

class QueryUtils {
	static getNumber = (p:URLSearchParams, key:string, d:number):number => {
		const v = p.get(key);
		if(!v){ return d; }
		var pv = Number(v);
		if(Number.isNaN(pv)){ return d; }
		return pv;
	};
	private constructor(){}
}

export const App:FC = () => {

	return (
		<Root>
		</Root>
	);
};

const Root = styled(Box.Abs)`
	overflow:hidden;
`;