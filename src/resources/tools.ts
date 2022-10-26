import { ToolDef } from "./types";
import * as Tools from "$tools";

export const tools:ToolDef[] = [

	{
		key:"format-dropbox",	
		title:"Format Dropbox Link",
		icon:"dropbox",
		component:Tools.FormatDropbox
	},
	{
		key:"color-picker",
		title:"Color Picker",
		icon:"flask",
		component:Tools.ColorPicker
	},
	{
		key:"css-filter",
		title:"Generate CSS Filter",
		icon:"flask",
		component:Tools.CSSFilter
	},
	{
		key:"generate-guid",
		title:"Generate GUID",
		icon:"flask",
		component:Tools.GenGUID
	},
	

];