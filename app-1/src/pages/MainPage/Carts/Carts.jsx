import React from "react";
import clas from "./Carts.module.scss";
import { motion } from "framer-motion";
import { SmoothCorners } from 'react-smooth-corners'

const Carts = () => {
	return (
		<div className={clas.cartsContainer}>
			<SmoothCorners
				corners="18, 9"
				as="div"
				borderRadius="18px"
				className={`${clas.cartControll} ${clas.cart}`}
			></SmoothCorners>
			<div className={clas.cartsContainer2}>
				<div className={`${clas.cartsContainer3}`}>
					<SmoothCorners
						corners="18,9"
						as="div"
						borderRadius="18px"
						className={`${clas.cartControll2} ${clas.cart}`}
					></SmoothCorners>
					<SmoothCorners
						corners="18,9"
						as="div"
						borderRadius="18px"
						className={`${clas.cartControll3} ${clas.cart}`}
					></SmoothCorners>
				</div>
				<SmoothCorners
					corners="4, 22"
					as="div"
					borderRadius="18px"
					className={`${clas.cartControll4} ${clas.cart}`}
				></SmoothCorners>
			</div>
		</div>
	);
};

export default Carts;
