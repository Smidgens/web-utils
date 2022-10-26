import { ToolDef } from "./types";
import { tools } from "./tools";

type ToolPredicate = (t:ToolDef) => boolean;

export class Tool {

	static get(key:string):ToolDef|null {
		return tools.find(x => x.key == key) || null;
	};

	static all(predicate?:ToolPredicate):ToolDef[] {
		if(!predicate){ return tools; }
		return tools.filter(predicate);
	}

	private constructor(){}

}