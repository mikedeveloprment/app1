import React from "react";
import clas from "./Carts.module.scss";
import { SmoothCorners } from "react-smooth-corners";

const Carts = () => {
	return (
		<div className={clas.cartsContainer}>
			<SmoothCorners
				className={clas.cartControll}
				corners="12, 10"
				borderRadius="20px"
				as="div"
			>

			</SmoothCorners>
		</div>
	);
};

export default Carts;
