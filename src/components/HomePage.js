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
						<NavLink to="/contact" className="cta">
							Hire Me!
						</NavLink>
					</div>
					<div className="scroll__icon">
						<img src={scrollIcon} alt="scroll icon" />
					</div>
				</div>
				<div className="hp-6">
					<section className="about">
						<h1 className="vp-6">
							About <span>Me</span>
						</h1>
						<div className="about__content">
							<p className="about__content--text">
								My name is Charles Roberts and I am a freelance web designer and
								frontend developer based in metro Detroit, MI. I started my
								development journey as an experiment to help grow my previous
								business. I was immediately hooked and never looked back. I now
								work diligently day after day honing my skills and helping
								others. My goal as a developer is to not only build beautiful,
								responsive and easy to use websites, but to also build websites
								that get results. My job is to showcase your skills, creativity
								and vision so that we can expand your brand and business.
							</p>
							<ul className="about__content--list">
								<li>
									<span>Location</span> Detroit, MI
								</li>
								<li>
									<span>Email</span> cjroberts2013@gmail.com
								</li>
								<li>
									<span>Phone</span> 979 618 0950
								</li>
								<li>
									<span>Twitter</span>{" "}
									<a
										href="https://twitter.com/cjrobertstech"
										target="_blank"
										rel="noopener noreferrer"
									>
										cjrobertstech
									</a>
								</li>
								<li>
									<span>LinkedIn</span>{" "}
									<a
										href="https://www.linkedin.com/in/cjrobertstech/"
										target="_blank"
										rel="noopener noreferrer"
									>
										cjrobertstech
									</a>
								</li>
								<li>
									<span>GitHub</span>{" "}
									<a
										href="https://github.com/cjroberts2013"
										target="_blank"
										rel="noopener noreferrer"
									>
										cjroberts2013
									</a>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default HomePage;
