import React from "react";
import clas from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
	const listRef = React.useRef(0);
	const [activeLink, setActiveLink] = React.useState(0);
	const [metres, setmetres] = React.useState([
		`63`,
		"0",
		`${100 / (listRef.current.offsetWidth || 416) *63*0.2/2}`,
	]);
	const array = ["Kitchen", "Bathroom", "Living room", "Bedroom"];
	const itemFunction = (event, index) => {
		if (activeLink !== index) {
			setActiveLink(index);
			setmetres([
				`${event.target.offsetWidth}`,
				`${(100 / listRef.current.offsetWidth) * event.target.offsetLeft}`,
				((100 / listRef.current.offsetWidth) * event.target.offsetWidth * 0.2) /
					2,
			]);
			console.log(event.target.offsetLeft);
		}

	};
	return (
		<nav className={clas.navigation}>
			<ul className={clas.list} ref={listRef}>
				{array.map((item, index) => (
					<li
						key={index}
						onClick={(event) => itemFunction(event, index)}
						className={
							activeLink === index
								? `${clas.link} ${clas.linkActive}`
								: clas.link
						}
					>
						<Link to="/">{item}</Link>
					</li>
				))}

				<span
					className={clas.line}
					style={{
						width: `${metres[0] * 0.8}px`,
						left: `${+metres[1] + +metres[2]}%`,
					}}
				></span>

				<span className={clas.trigger}></span>
			</ul>
		</nav>
	);
};

export default Navigation;
