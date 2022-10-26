import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveContext } from "./Context";
import { LayoutSize } from "./types";
import { getMediaRules } from "./config";

interface IResponsiveProvider {
	children:React.ReactNode;
}

export const ResponsiveProvider: FC<IResponsiveProvider> = ({ children }) => {
	const states = getSizeStates();
	const size:any = (Object.keys(states) as LayoutSize[])
	.find(k => states[k]) || "md";
	return (
		<ResponsiveContext.Provider value={{ size }}>
			{children}
		</ResponsiveContext.Provider>
	);
};

const getSizeStates = () => {
	const media = getMediaRules();
	const r:any = {};
	Object.keys(media)
	.forEach(sk => r[sk] = useMediaQuery({ query:media[sk as LayoutSize] }));
	return r as Record<LayoutSize,boolean>;
};