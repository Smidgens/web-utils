import { useContext } from "react";
import { ResponsiveContext } from "./Context";
import { LayoutSize } from "../layout";

const sizeNames = [
	"xs",
	"sm",
	"md",
	"xl",
	"lg",
];
type HookResult = Readonly<{
	size:LayoutSize;
	isSmall:boolean;
	isGreaterOrEqual:(s:LayoutSize) => boolean;
}>;

export const useResponsive = ():HookResult => {

	const {
		size,
	} = useContext(ResponsiveContext);

	const isSmall = size === "sm" || size === "xs";

	const isGreaterOrEqual = (s:LayoutSize) => {
		const i = sizeNames.indexOf(s);
		const j = sizeNames.indexOf(size);
		return j >= i;
	};

	return {
		size,
		isSmall,
		isGreaterOrEqual,
	};

}