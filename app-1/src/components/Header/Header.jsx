import React from "react";
import clas from "./Header.module.scss";

const Header = () => {
	const [menuActiveClass, setMenuActiveClass] = React.useState(false);
	console.log(menuActiveClass);
	return (
		<header className={clas.header}>
			<div className={clas.logo}>Host</div>
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
								transitionDelay: `${menuActiveClass? (i * 0.1 + 0.5) : (i * 0.1)}s`,
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
