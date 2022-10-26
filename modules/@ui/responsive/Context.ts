import { createContext } from "react";
import { IResponsiveProvider } from "./types";
import { DEFAULT_SIZE } from "./config";

export const ResponsiveContext = createContext<IResponsiveProvider>({
	size:DEFAULT_SIZE,
});