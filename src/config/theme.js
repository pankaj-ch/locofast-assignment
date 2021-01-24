import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
	typography: { fontFamily: "Nunito, sans-serif" },
	palette: {
		primary: { main: "#0067E2" }
	},
	overrides: {
		MuiDialogActions: { root: { padding: "8px 16px" } },
		MuiDialogTitle: { root: { padding: "16px 14px 16px 24px" } },
		MuiDialog: { paperWidthMd: { borderRadius: 12, maxWidth: 1100 } },
		MuiButton: {
			root: { fontWeight: 600, margin: "0 5px" },
			outlined: { borderColor: "#D4D4D4" },
			contained: {
				"&.Mui-disabled": { backgroundColor: "#D4D4D4", color: "#ffffff" }
			}
		}
	}
};

export default createMuiTheme(theme);
