import React from "react";
import clas from "./Header.module.scss";

const Header = () => {
	const [menuActiveClass, setMenuActiveClass] = React.useState(true);
	const word = "Host";
	const textArray = word.split("");
	return (
		<header className={clas.header}>
			<div className={clas.logo}>
				{textArray.map((letter, index) => (
					<span
						key={index}
						style={{
							animationDelay: `${index * 0.1}s`,
						}}
						className={clas.letter}
					>
						{letter}
					</span>
				))}
			</div>
			<button
				onClick={() => setMenuActiveClass(!menuActiveClass)}
				className={
					menuActiveClass ? clas.menu : ` ${clas.menu} ${clas.menuActive}`
				}
			>
				<div className={clas.iconContainer}>
					{[...Array(4)].map((_, i) => (
						<span
							style={{
								transitionDelay: `${
									menuActiveClass ? i * 0.1 + 0.5 : i * 0.1
								}s`,
							}}
							key={i}
							className={
								menuActiveClass
									? clas.circle
									: ` ${clas.circle} ${clas.circleActive}`
							}
						></span>
					))}
				</div>
				<nav
					className={
						menuActiveClass ? clas.nav : ` ${clas.nav} ${clas.navActive}`
					}
				></nav>
			</button>
		</header>
	);
};

export default Header;
