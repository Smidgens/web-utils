import { FC } from "react";

export type ToolDef = {
	key:string;
	title:string;
	icon?:string;
	component:FC;
};