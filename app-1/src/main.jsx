import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="container">
		<div className="wrapper-blures">
			<div className="cont-blures">
				<span className="blures-1"></span>
				<span className="blures-2"></span>
				<span className="blures-3"></span>
				<span className="blures-4"></span>
				<span className="blures-5"></span>
			</div>
		</div>
		<div className="wrapper">
			<div className="cont">
				<Header />
			</div>
		</div>
	</div>
);

// npm install react-smooth-corners --save
// npm i react-router-dom@6.3.0
// npm install framer-motion
// npm install @reduxjs/toolkit
// npm install react-redux
// npm install sass
