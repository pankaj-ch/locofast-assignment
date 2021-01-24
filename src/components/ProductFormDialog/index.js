import React from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Cross from "@locofast/components/Icons/Cross";

import ProductForm from "./molecules/ProductForm";
import hocProductFormDialog from "./hocProductFormDialog";

const ProductFormDialog = ({ open, imageUrl, onClose, ...props }) => (
	<Dialog maxWidth="md" {...{ open, onClose }}>
		<DialogTitle onClose={onClose}>
			<Grid container>
				<Grid item xs>
					<Typography variant="h6" gutterBottom>
						<b>Material details</b>
					</Typography>
				</Grid>
				<Grid item xs="auto">
					<IconButton onClick={onClose}>
						<Cross />
					</IconButton>
				</Grid>
			</Grid>
		</DialogTitle>
		<DialogContent>
			<Grid container>
				<Grid item xs="auto">
					<CardMedia className="product-form__img" image={imageUrl} />
				</Grid>
				<Grid item xs>
					<ProductForm {...props} />
				</Grid>
			</Grid>
		</DialogContent>
		<DialogActions className="border-top">
			<Button variant="outlined" onClick={onClose}>
				Back
			</Button>
			<Button disabled variant="contained" color="primary" onClick={onClose}>
				Next
			</Button>
		</DialogActions>
	</Dialog>
);

export default hocProductFormDialog(ProductFormDialog);
