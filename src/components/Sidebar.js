import React, { Component } from "react";
import profilPic from "./../images/profile-min2.jpg";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
	render() {
		return (
			<div className={`sidebar ${this.props.showSidebar}`}>
				<button className="close-nav" onClick={this.props.removeSidebar}>
					<i className="fas fa-times"></i>
				</button>
				<div className="sidebar__content">
					<img src={profilPic} alt="Profile" />
					<div className="sidebar__text">
						<h1>Charles Roberts</h1>
						<p>Web Developer</p>
						<div className="sidebar__text--logos">
							<a
								href="https://twitter.com/cjrobertstech"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i name="atag" className=" fab fa-twitter"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/cjrobertstech/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i name="atag" className=" fab fa-linkedin-in"></i>
							</a>
							<a
								href="https://github.com/cjroberts2013"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i name="atag" className="fab fa-github"></i>
							</a>
						</div>
					</div>
					<div className="sidebar__nav">
						<NavLink
							to="/"
							activeClassName="is-active"
							exact
							onClick={this.props.removeSidebar}
						>
							Home
						</NavLink>

						<NavLink
							to="/portfolio"
							activeClassName="is-active"
							onClick={this.props.removeSidebar}
						>
							Portfolio
						</NavLink>

						<NavLink
							to="/blog"
							activeClassName="is-active"
							onClick={this.props.removeSidebar}
						>
							Blog
						</NavLink>
						<NavLink
							to="/contact"
							activeClassName="is-active"
							onClick={this.props.removeSidebar}
						>
							Contact
						</NavLink>
					</div>
				</div>
				<p className="copyright">&copy; 2020 All rights reserved.</p>
			</div>
		);
	}
}

export default Sidebar;
