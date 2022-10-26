// smidgens @ github

export class CBoard {

	static CopySelected() {

		document.execCommand("copy");
	}

	// copy text to clipboard
	static async Copy(txt:string) {

		throw new Error("N/I");
	}

	private constructor(){}

}