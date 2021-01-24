import React from "react";
import CircleIcon from "@locofast/components/Icons/Circle";

const ColorPalettes = ({ colors }) => {
	const SHOW_TOTAL_COLORS = 6;
	const extraColors = colors.length - SHOW_TOTAL_COLORS;

	return (
		<div className="caption">
			Also available in
			<div className="product-item__colors">
				{colors.map(
					(color, index) =>
						index < SHOW_TOTAL_COLORS && (
							<CircleIcon
								key={index}
								fill={color}
								className="product-item__color"
							/>
						)
				)}
				{extraColors > 0 && (
					<span className="product-item__meta">+{extraColors}</span>
				)}
			</div>
		</div>
	);
};

export default ColorPalettes;
