import React from "react";
import clas from "./Cart1.module.scss";
const Cart1 = () => {
	const [checkActive, setcheckActive] = React.useState(false);
	return (
		<div className={`${clas.cartControll} ${clas.cart}`}>
			<div className={clas.infoCont}>
				<p className={clas.textCard}>Temperature</p>
				<button
					onClick={() => setcheckActive(!checkActive)}
					className={
						checkActive
							? clas.checkboks
							: `${clas.checkboks} ${clas.checkboksActive}`
					}
				>
					<span
						className={
							checkActive ? clas.circle : `${clas.circle} ${clas.circleActive}`
						}
					></span>
				</button>
			</div>
		</div>
	);
};

export default Cart1;
