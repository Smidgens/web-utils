// smidgens @ github

import { InputURL } from "./URL";
import { InputText } from "./Text";

export class Input {

	// url input
	static get URL(){ return InputURL; }
	static get Text(){ return InputText; }

	private constructor(){}
}