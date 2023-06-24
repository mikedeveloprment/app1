import React from "react";
import clas from "./Carts.module.scss";
import { SmoothCorners } from "react-smooth-corners";

const Carts = () => {
	return (
		<div className={clas.cartsContainer}>
			<div
				className={clas.cartControll}
				corners="16, 8"
				borderRadius="20px"
				as="div"
			>

			</div>
		</div>
	);
};

export default Carts;
