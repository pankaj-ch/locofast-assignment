import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Logo from "@locofast/components/Logo";
import TopNav from "@locofast/components/TopNav";
import ProductList from "@locofast/components/ProductList";

const Dashboard = () => (
	<Grid className="dashboard" container>
		<Grid item xs="auto">
			<Box className="left-nav" bgcolor="primary.main">
				<Logo />
			</Box>
		</Grid>
		<Grid item xs>
			<TopNav />
			<ProductList />
		</Grid>
	</Grid>
);

export default Dashboard;
