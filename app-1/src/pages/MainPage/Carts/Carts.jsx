import React from "react";
import clas from "./Carts.module.scss";
import { motion } from "framer-motion";

const Carts = () => {
	return (
		<div className={clas.cartsContainer}>
			<div className={`${clas.cartControll} ${clas.cart}`}></div>
			<div className={clas.cartsContainer2}>
				<div className={`${clas.cartsContainer3}`}>
				<div className={`${clas.cartControll2} ${clas.cart}`}></div>
				<div className={`${clas.cartControll3} ${clas.cart}`}></div>
				</div>
				<div className={`${clas.cartControll4} ${clas.cart}`}></div>
			</div>
		</div>
	);
};

export default Carts;
