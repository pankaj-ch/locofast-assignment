import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import ProductItem from "./molecules/ProductItem";

import Api from "@locofast/api";

class ProductList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { products: [] };
	}

	componentDidMount() {
		Api.getProducts().then((products) => this.setState({ products }));
	}

	render() {
		const { products } = this.state;

		return (
			<Container className="product-list">
				<GridList cellHeight={358} cols={4} spacing={16}>
					{products.map((product) => (
						<ProductItem key={product.id} {...product} />
					))}
				</GridList>
			</Container>
		);
	}
}

export default ProductList;
