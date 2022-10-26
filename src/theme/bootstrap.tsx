import { css } from "styled-components";
import "./bootstrap.css";

// const containerSizes:Record<string,number[]> = {
// 	"xxl":[1440,1320],
// 	"xl":[1200,1140],
// 	"lg":[992,960],
// 	"md":[768,720],
// 	"sm":[576,540],
// }

const containerSizes:Record<string,number[]> = {

	"xl":[950,1000],
	"lg":[700,750],
	"md":[768,720],
	"sm":[576,540],
}

const allContainers = css`
	/* padding-right: var(--bs-gutter-x, 0.75rem);
	padding-left: var(--bs-gutter-x, 0.75rem); */
	margin-right: auto;
	margin-left: auto;
	padding-left:0;
	padding-right:0;
`;


const getBootstrapContainers = () => {

	const rules:string[] = [];
	const sizes = Object.keys(containerSizes);
	const classes = sizes.map(size => `.container-${size}`);

	classes.push(".container");

	sizes.forEach((size, i) => {
		const cls = classes.slice(i).join(", ");
		const values = containerSizes[size];
		rules.push(`
		@media (min-width: ${values[0]}px) { ${cls} { max-width:${values[1]}px;  } }
		`.trim());
	});

	const all = css`
		.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
			${allContainers};
		}
	`;

	const containerTxt = rules.reverse().join("");

	return css`
	${all};
	${containerTxt};
	`;

};


export const bootstrap = css`
	${getBootstrapContainers()};
	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

