import React, { Component } from "react";
import "./styles/main.scss";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
	constructor() {
		super();
		this.state = {
			showSidebar: "",
		};
	}

	render() {
		const addSidebar = () => {
			this.setState({ showSidebar: "show-sidebar" });
			console.log("click");
		};

		const removeSidebar = () => {
			this.setState({ showSidebar: "" });
		};

		return (
			<BrowserRouter>
				<div className="page">
					<div className="container">
						<button className="menu" onClick={addSidebar}>
							<i className="fas fa-bars menu__btn"></i>
						</button>
						<Sidebar
							showSidebar={this.state.showSidebar}
							removeSidebar={removeSidebar}
						/>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/portfolio" component={PortfolioPage} />
							<Route path="/blog" exact component={BlogPage} />
							<Route path="/contact" component={ContactPage} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
