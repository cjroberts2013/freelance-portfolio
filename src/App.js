import React from "react";
import "./styles/main.scss";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import ResumePage from "./components/ResumePage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="page">
				<div className="container">
					<Sidebar />
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/portfolio" component={PortfolioPage} />
						<Route path="/resume" component={ResumePage} />
						<Route path="/blog" exact component={BlogPage} />
						<Route path="/contact" component={ContactPage} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
