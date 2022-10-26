// smidgens @ github

export enum RouteParam {
	ToolID = "id"
}

export class AppPath {
	static readonly Home = "/";
	static readonly Tool = `/:${RouteParam.ToolID}`;
	private constructor(){}
}
