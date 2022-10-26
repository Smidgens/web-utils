import { LayoutSize } from "../layout";

export type SizeBreaks = Record<LayoutSize,number>;
export type SizeMap<T> = Record<LayoutSize,T>;

export interface IResponsiveProvider {
	size:LayoutSize;
}