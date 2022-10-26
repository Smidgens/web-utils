import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { Providers } from "./Providers";
import { GlobalStyles } from "./theme/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<GlobalStyles/>
		<Providers>
			<App/>
		</Providers>
	</React.StrictMode>,
);