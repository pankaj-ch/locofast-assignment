import React, { PureComponent } from "react";
import Api from "@locofast/api";

const HocProductFormDialog = (WrappedComponent) => {
	class HocProductForm extends PureComponent {
		constructor(props) {
			super(props);
			this.state = {
				quantity: "",
				factory: null,
				designs: null,
				factories: [],
				designs: []
			};
		}

		componentDidMount() {
			Promise.all([Api.getFactories(), Api.getDesigns()])
				.then(([factories, designs]) => this.setState({ factories, designs }))
				.catch(console.warn);
		}

		render() {
			return <WrappedComponent {...this.props} {...this.state} />;
		}
	}

	return HocProductForm;
};

export default HocProductFormDialog;
