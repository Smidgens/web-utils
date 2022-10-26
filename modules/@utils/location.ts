// smidgens @ github

// utils for working with location
export class Loc {

	// 
	static get IsHomeRoute(){

		// note: won't work if hosted on base path
		return window.location.pathname === "/";
	}

	private constructor(){}
}