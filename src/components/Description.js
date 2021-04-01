import React from "react";
import "./Description.css";
import { BsDisplay, BsGear, BsCodeSlash } from "react-icons/bs";

export default function Description() {
	return (
		<div>
			<div className="description">
				<h2>About Me</h2>
				<p>
					A Full Stack Developer who specializes in JavaScript Technologies across the whole stack (React, Node.js, Express). Experience building
					complete web applications. Passionate about anything remotely related to software development.
				</p>
				<p>
					Currently working as a Frontend Developer at{" "}
					<a target="_blank" style={{ color: "#fff" }} rel="noopener noreferrer" href="https://readocracy.com/">
						Readocracy
					</a>
					.
				</p>
			</div>
			<div className="center">
				<div className="skills">
					<div className="skill-col br">
						<BsDisplay className="icon" />
						<h2>Frontend</h2>
						<div className="skill">HTML</div>
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">React</div>
						<div className="skill">React Native</div>
						<div className="skill">Redux</div>
						<div className="skill">MaterialUI</div>
					</div>
					<div className="skill-col br">
						<BsGear className="icon" />
						<h2>Backend</h2>
						<div className="skill">Node.js</div>
						<div className="skill">Express.js</div>
						<div className="skill">MongoDB</div>
						<div className="skill">MySQL</div>
					</div>
					<div className="skill-col">
						<BsCodeSlash className="icon" />
						<h2>Development</h2>
						<div className="skill">Git</div>
						<div className="skill">Linux</div>
						<div className="skill">Scrum</div>
						<div className="skill">Jira</div>
						<div className="skill">Trello</div>
						<div className="skill">Netlify</div>
					</div>
				</div>
			</div>
		</div>
	);
}
