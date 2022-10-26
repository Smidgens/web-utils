import { SizeMap } from "./types";
import { LayoutSize } from "../layout";

const breaks:SizeMap<number> = {
	xl:3000,
	lg:1300,
	md:720,
	sm:540,
	xs:300,
};

const getRule = (min:number = -1, max:number = -1) => {
	return [
		...(min > 0 ? [`(min-width:${min}px)`] : []),
		...(max > 0 ? [`(max-width:${max}px)`] : []),
	].join(" and ")
};

const media:SizeMap<string> = {
	xl:getRule(breaks.xl),
	lg:getRule(breaks.lg),
	md:getRule(breaks.md, breaks.lg),
	sm:getRule(breaks.sm, breaks.md),
	xs:getRule(-1, breaks.sm),
};

export const DEFAULT_SIZE:LayoutSize = "md";

export const getMediaRules = () => {
	return media;
};