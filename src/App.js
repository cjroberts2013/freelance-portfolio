import React from "react";
import "./styles/main.scss";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="page">
				<div className="container">
					<Sidebar />
					<Switch></Switch>
					<div className="content">hi</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
