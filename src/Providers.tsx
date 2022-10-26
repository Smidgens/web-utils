import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ResponsiveProvider } from "@ui";

export const Providers:FC<{
	children:React.ReactNode;
}> = (props) => {
	return (
		<BrowserRouter>
			<ResponsiveProvider>
				{ props.children}
			</ResponsiveProvider>
		</BrowserRouter>
	);
};