import { SpriteSheet } from "@ui";
import { sprites } from "#content";

export class Resources {
	static findSprite(name:string){
		return sheet.find(name);
	}
}

const sheet = SpriteSheet.fromManifest(sprites);
