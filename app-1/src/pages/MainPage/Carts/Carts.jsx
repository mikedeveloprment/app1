import React from "react";
import clas from "./Carts.module.scss";
import { motion } from "framer-motion";

const Carts = () => {
	return (
		<div className={clas.cartsContainer}>
			<motion.div

				className={clas.cartControll}
			></motion.div>
		</div>
	);
};

export default Carts;
