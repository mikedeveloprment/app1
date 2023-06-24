import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/Header/Header";
import Blurs from "./components/Blurs/Blurs";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<div className="container">
			<Blurs />
			<div className="wrapper"></div>
			<div className="cont">
				<div className="cont2">
					<Header />
					<MainPage />
				</div>
			</div>
		</div>
	</BrowserRouter>
);

// npm install react-smooth-corners --save
// npm i react-router-dom@6.3.0
// npm install framer-motion
// npm install @reduxjs/toolkit
// npm install react-redux
// npm install sass
