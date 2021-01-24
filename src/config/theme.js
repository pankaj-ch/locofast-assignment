import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
	typography: { fontFamily: "Nunito, sans-serif" },
	palette: {
		primary: { main: "#0067E2" }
	},
	overrides: {
		MuiDialog: { paperWidthMd: { maxWidth: 1100 } }
	}
};

export default createMuiTheme(theme);
