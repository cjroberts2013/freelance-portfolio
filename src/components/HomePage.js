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
						<NavLink to="/portfolio" className="cta">
							Check Out My Work!
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
									<span>Email</span> charles@charlesroberts.design
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
					<section className="skills">
						<div className="coding__skills">
							<h2>
								Coding <span>Skills</span>
							</h2>
							<div className="skills__icons">
								<span>
									<ion-icon name="logo-html5"></ion-icon>
								</span>
								<span>
									<ion-icon name="logo-css3"></ion-icon>
								</span>
								<span>
									<ion-icon name="logo-sass"></ion-icon>
								</span>
								<span>
									<ion-icon name="logo-javascript"></ion-icon>
								</span>
								<span>
									<ion-icon name="logo-react"></ion-icon>
								</span>
								<span>
									<ion-icon name="logo-github"></ion-icon>
								</span>
							</div>
						</div>
					</section>
					<section className="services">
						<h2>
							What <span>I Do</span>
						</h2>
						<div className="service__cards">
							<div className="card">
								<span>
									<ion-icon name="desktop-outline"></ion-icon>
								</span>
								<h3>Responsive Web Design</h3>
								<p>
									No matter how small, any business will benefit from a web
									presence in this day and age. Let me help bring your vision to
									life with a fast loading, beautiful site, custom built to your
									specific needs.
								</p>
							</div>
							<div className="card">
								<span>
									<ion-icon name="cloud-upload-outline"></ion-icon>
								</span>
								<h3>Web Hosting</h3>
								<p>
									Hosting is tricky and a hassle to deal with. As your hosting
									manager, I'll take care the necessary updates and support
									needed to keep your site running smoothly.
								</p>
							</div>
							<div className="card">
								<span>
									<ion-icon name="newspaper-outline"></ion-icon>
								</span>
								<h3>Online Marketing</h3>
								<p>
									Want to tell your story? I help businesses grow by
									communicating brand stories using online media, print and
									social media.
								</p>
							</div>
							<div className="card">
								<span>
									<ion-icon name="search-circle-outline"></ion-icon>
								</span>
								<h3>SEO & AdWords</h3>
								<p>
									I optimize websites for search engines, monitor conversions
									and manage inbound marketing. Every website will include
									keyword rich title tags, keyword rich URLs, keyword rich image
									alt tags and compelling meta descriptions.
								</p>
							</div>
						</div>
					</section>
					<section className="reviews">
						<h2>
							Clients <span>& Reviews</span>
						</h2>
						<div className="review__card">
							Custom reviews from brody daryl and annette.
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default HomePage;
