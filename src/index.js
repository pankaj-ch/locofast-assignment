import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import "@fontsource/nunito";
import theme from "@locofast/config/theme";

import "@locofast/stylesheet";
import App from "@locofast/app";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
