import React, { useState } from "react";
import clas from "./Cart1.module.scss";
const Cart1 = () => {
	const [checkActive, setcheckActive] = useState(false);
	const [temp, setTemp] = useState(10.0);
	console.log(temp > 5);
	return (
		<div className={`${clas.cartControll} ${clas.cart}`}>
			{/* <img src="../../../../../pilisos.webp" /> */}
			<div className={clas.infoCont}>
				<p className={clas.textCard}>Air conditioner</p>
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
			<span className={clas.caption}>LG S12EQ</span>

			<div className={clas.infoCont2}>
				<span className={clas.gradus}>
					{temp.toFixed(1)}
					<svg
						className={clas.circleGradus}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2C2 2 2 12 2 12C2 12 2 22 12 22C22 22 22 12 22 12C22 12 22 2 12 2Z"
							stroke="#88888881"
							strokeWidth="4"
						/>
					</svg>
				</span>
				<div className={clas.buttonCont}>
					<button
						onClick={
							!checkActive && temp < 15 ? () => setTemp(Number(temp.toFixed(1)) + 0.1) : null
						}
						className={clas.increment}
					></button>
					<button
						onClick={
							!checkActive && temp > 5
								? () => setTemp(Number(temp.toFixed(1)) - 0.1)
								: null
						}
						className={clas.decrement}
					></button>
				</div>
			</div>
		</div>
	);
};

export default Cart1;
