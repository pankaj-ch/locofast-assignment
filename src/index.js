import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import "@fontsource/nunito";

import "@locofast/stylesheet";
import App from "@locofast/app";
import theme from "@locofast/config/theme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
