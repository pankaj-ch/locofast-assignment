import React, { PureComponent } from "react";

const HocProductFormDialog = (WrappedComponent) => {
	class HocProductForm extends PureComponent {
		constructor(props) {
			super(props);
			this.state = {};
		}

		render() {
			return <WrappedComponent {...this.props} {...this.state} />;
		}
	}

	return HocProductForm;
};

export default HocProductFormDialog;
