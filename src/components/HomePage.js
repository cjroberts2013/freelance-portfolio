import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import scrollIcon from "./../images/scroll-icon.png";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

export class HomePage extends Component {
	render() {
		return (
			<div className="content">
				<div className="hero">
					<div className="blank"></div>
					<div className="hero__content">
						<h1>Charles Roberts</h1>
						<p>Web Developer</p>
						<NavLink to="/contact">Contact</NavLink>
					</div>
					<div className="scroll__icon">
						<img src={scrollIcon} alt="scroll icon" />
					</div>
				</div>
				<div className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					eum eligendi quam accusamus vitae iusto deserunt, fugiat est aliquam
					quasi ipsa velit blanditiis porro excepturi doloremque nulla commodi
					facilis magni delectus, consequatur itaque ipsum. Labore amet cumque
					veritatis nihil? Cum repudiandae natus at beatae ad aliquam quos sed
					consequuntur vero eligendi! Officia, saepe? Vitae at eius velit!
					Minima doloribus sapiente deserunt cumque nulla. Natus nostrum,
					placeat veniam voluptatem delectus ex quia doloremque numquam laborum!
					Animi, similique alias deserunt est sed nam cumque, asperiores dicta
					esse neque aperiam omnis vel, molestiae voluptate incidunt et. Animi
					amet aliquid repudiandae nisi maxime provident!
				</div>
			</div>
		);
	}
}

export default HomePage;
