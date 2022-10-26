import { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import { Sprite } from ".";
import { SpriteSheetManifest } from "./types";

export class SpriteSheet {

	static fromManifest(mf:SpriteSheetManifest){
		const icons = mf.items;
		const components:ComponentMap = {};
		Object.keys(icons)
		.forEach(name => {
			var cell = icons[name];
			if(cell.length < 3){ return; }
			var pos = { x:cell[0], y:cell[1] };
			var s = Sprite.getOne({
				atlas:{
					src: mf.image,
					size: (mf.size as any),
				},
				w:(cell[2] as any),
				...pos,
			});
			components[name] = SpriteSheet.buildComponent(s);
		});
		return new SpriteSheet(components);
	}

	public find(name:string){
		return this._components[name] || Fallback;
	}

	private _components:ComponentMap;

	private constructor(c:ComponentMap){
		this._components = c;
	}

	private static buildComponent = (Sprite:FC):IconComponent => {
		const c:IconComponent = props => {
			return (
				<IcoWrapper className={ props.className} style={ props.style }>
					<Sprite/>
				</IcoWrapper>
			);
		};
		return c;
	};
}

type ComponentMap = Record<string,IconComponent|undefined>;

type IconComponent = FC<{
	className?:string;
	style?:CSSProperties;
}>

const IcoWrapper = styled.div``;
const Fallback:any = () => <></>

// export const findIcon = (name:string):IconComponent => {
// 	return components[name] || Fallback;
// };


// const buildComponent = (Sprite:FC):IconComponent => {
// 	const c:IconComponent = props => {
// 		return (
// 			<IcoWrapper className={ props.className} style={ props.style }>
// 				<Sprite/>
// 			</IcoWrapper>
// 		);
// 	};
// 	return c;
// };


// const IMG_PATH = manifest.image;

// const Fallback:any = () => <></>

// // name -> cell in atlas
// const icons:CellGrid = manifest.items;

// const components:ComponentMap = {};
// type IconComponent = FC<{
// 	className?:string;
// 	style?:CSSProperties;
// }>

// type CellGrid = Record<string,number[]>;
// type ComponentMap = Record<string,IconComponent|undefined>;



// const IcoWrapper = styled.div`

// `;

// (() => {

// 	Object.keys(icons)
// 	.forEach(name => {
// 		var cell = icons[name];
// 		if(cell.length < 3){ return; }
// 		var pos = { x:cell[0], y:cell[1] };
// 		var s = Sprite.getOne({
// 			atlas:{
// 				src: IMG_PATH,
// 				size: (manifest.size as any),
// 			},
// 			w:(cell[2] as any),
// 			...pos,
// 		});
// 		components[name] = buildComponent(s);
// 	});
// })();
