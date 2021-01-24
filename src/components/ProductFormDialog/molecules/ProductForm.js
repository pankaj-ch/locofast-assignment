import React from "react";
import Typography from "@material-ui/core/Typography";
import LeftArrow from "@locofast/components/Icons/LeftArrow";

const ProductForm = ({}) => (
	<div className="product-form">
		<Typography variant="h6">
			<LeftArrow />
			<b style={{ marginLeft: 20 }}>Assign to factory</b>
		</Typography>
	</div>
);

export default ProductForm;
