import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import blogImg1 from "./../images/blogImg1.png";

export class BlogPage extends Component {
	render() {
		return (
			<div className="content hp-6 blog">
				<h1 className="blog__header">
					Blog <span>Post</span>
				</h1>
				<div className="blogs vp-6">
					<NavLink to="/blog/1" className="card">
						<img src={blogImg1} alt="React.js" />
						<div className="card__content">
							<h3>Janurary 22, 2020</h3>
							<h2>Styling React Components</h2>
						</div>
					</NavLink>
					<NavLink to="/blog/2" className="card">
						<img src={blogImg1} alt="React.js" />
						<div className="card__content">
							<h3>Janurary 22, 2020</h3>
							<h2>Styling React Components</h2>
						</div>
					</NavLink>
					<NavLink to="/blog/3" className="card">
						<img src={blogImg1} alt="React.js" />
						<div className="card__content">
							<h3>Janurary 22, 2020</h3>
							<h2>Styling React Components</h2>
						</div>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default BlogPage;

// <NavLink to="/portfolio" className="cta">
// 	Check Out My Work!
// </NavLink>;
