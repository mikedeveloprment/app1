import React from "react";
import clas from "./Blurs.module.scss";
const Blurs = () => {
	return (
		<div className={clas.wrapperBlures}>
			<div className={clas.contBlures}>
				<span className={clas.blures1}></span>
				<span className={clas.blures2}></span>
				<span className={clas.blures3}></span>
				<span className={clas.blures4}></span>
			</div>
		</div>
	);
};

export default Blurs;
