import React, { Component } from "react";
import profilPic from "./../images/profile-min2.jpg";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<img src={profilPic} alt="Profile" />
				<div className="sidebar__content">
					<h1>Charles Roberts</h1>
					<p>Web Developer</p>
					<div className="sidebar__content--logos">
						<a href="https://twitter.com/cjrobertstech" target="_blank">
							<i name="atag" className=" fab fa-twitter"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/cjrobertstech/"
							target="_blank"
						>
							<i name="atag" className=" fab fa-linkedin-in"></i>
						</a>
						<a href="https://github.com/cjroberts2013" target="_blank">
							<i name="atag" className="fab fa-github"></i>
						</a>
					</div>
				</div>
				<div className="sidebar__nav">
					<NavLink to="/" activeClassName="is-active" exact>
						Home
					</NavLink>
					<NavLink to="/about" activeClassName="is-active">
						About Me
					</NavLink>
					<NavLink to="/portfolio" activeClassName="is-active">
						Portfolio
					</NavLink>
					<NavLink to="/resume" activeClassName="is-active">
						Resume
					</NavLink>
					<NavLink to="/blog" activeClassName="is-active">
						Blog
					</NavLink>
					<NavLink to="/contact" activeClassName="is-active">
						Contact
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Sidebar;
