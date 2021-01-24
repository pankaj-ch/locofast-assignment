import designs from "./locofast/designs";
import products from "./locofast/products";
import factories from "./locofast/factories";

class Api {
	static getDesigns = () => Promise.resolve(designs);
	static getProducts = () => Promise.resolve(products);
	static getFactories = () => Promise.resolve(factories);
}

export default Api;
