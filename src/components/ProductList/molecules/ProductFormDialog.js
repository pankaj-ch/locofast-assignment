import React from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Cross from "@locofast/components/Icons/Cross";

const ProductFormDialog = ({ open, imageUrl, onClose }) => {
	return (
		<Dialog maxWidth="md" {...{ open, onClose }}>
			<DialogTitle onClose={onClose}>
				<Grid container>
					<Grid item xs>
						<Typography variant="h6" gutterBottom>
							<b>Material details</b>
						</Typography>
					</Grid>
					<Grid item xs="auto">
						<Cross className="cursor-p" onClick={onClose} />
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography gutterBottom>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</Typography>
				<Typography gutterBottom>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
				</Typography>
				<Typography gutterBottom>
					Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
					magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
					ullamcorper nulla non metus auctor fringilla.
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={onClose} color="primary">
					Save changes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ProductFormDialog;
