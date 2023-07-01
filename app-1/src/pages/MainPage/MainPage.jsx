import React from "react";
import Navigation from "./Navigation/Navigation";
import Carts from "./Carts/Carts";

const MainPage = () => {
	return (
		<div style={{
			width: "100%",
			display: "flex",
			flexDirection: "column"

		}}>
			<Navigation />
			<Carts />
		</div>
	);
};

export default MainPage;
