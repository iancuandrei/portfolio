import React, { useState, useEffect, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import portrait from "../images/portrait-min.jpeg";
import "./Intro.css";
import Description from "./Description";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Navbar.css";
import logo from "../images/logo_transparent.png";

export default function LandingPage() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				DOTS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x7724d6,
					color2: 0xffffff,
					backgroundColor: 0xffffff,
					size: 4.0,
					spacing: 24.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return (
		<div>
			<div className="intro" ref={myRef}>
				<div className="navbar">
					<img alt="logo" className="logo" src={logo}></img>
					<div>
						<a href="#about" className="link">
							About
						</a>
						<a href="#projects" className="link">
							Projects
						</a>
						<a href="#contact" className="link">
							Contact
						</a>
					</div>
				</div>
				<h1>Hey, I'm Andrei.</h1>
				<p>Full Stack JavaScript Developer</p>
				<img className="portrait" alt="portrait" src={portrait}></img>
			</div>
			<div id="about">
				<Description />
			</div>
			<div id="projects">
				<Projects />
			</div>
			<div id="contact">
				<Contact />
			</div>
		</div>
	);
}
