// smidgens @ github

// https://www.dropbox.com/s/<id>/<name>
// https://www.dl.dropboxusercontent.com/s/<id>/<name>

export class Dropbox {



	static isShareLink(url:string){
		return isShareLink(url);
	}


	static getDirectLink(url:string){

		if(isDropboxLink(url)){
			return formatDirectLink(url);
		}

		return url;
	}


	private constructor(){}
}


const formatDirectLink = (url:string) => {
	if(!isShareLink(url)){
		return url;
	}
	url = url.replace("dropbox.com", "dl.dropboxusercontent.com");
	url = url.split(/[?#]/)[0];
	return url;
};

const isDropboxLink = (url:string) => {
	const v = [
		"https://www.dropbox.com/s/",
		"https://dropbox.com/s/",
		"https://www.dropbox.com/sh/",
		"https://dropbox.com/sh/",
		"https://www.dl.dropboxusercontent.com/s/",
		"https://dl.dropboxusercontent.com/s/",
	].findIndex(u => url.startsWith(u)) > -1;;
	return v;
};


const isShareLink = (url:string) => {
	return [
		"https://www.dropbox.com/s/",
		"https://dropbox.com/s/",
		"https://www.dropbox.com/sh/",
		"https://dropbox.com/sh/",
	].findIndex(u => url.startsWith(u)) > -1;
};
