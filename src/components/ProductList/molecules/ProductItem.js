import React, { useState } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import ProductFormDialog from "@locofast/components/ProductFormDialog";
import ColorPalettes from "./ColorPalettes";

const ProductItem = ({ id, name, imageUrl, colors }) => {
	const [hover, setHover] = useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	return (
		<>
			<div
				className="product-item"
				onClick={() => setOpenModal(true)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<CardMedia className="product-item__img" image={imageUrl} />
				<div className="product-item__content">
					{hover && <div className="caption">ID: {id}</div>}
					<div className="paragraph">{name}</div>
					{hover ? (
						<ColorPalettes colors={colors} />
					) : (
						<div className="caption">{colors.length} more colors</div>
					)}
				</div>
			</div>

			<ProductFormDialog
				open={openModal}
				imageUrl={imageUrl}
				onClose={() => setOpenModal(false)}
			/>
		</>
	);
};

export default ProductItem;
