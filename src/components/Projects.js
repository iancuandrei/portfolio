import React from "react";
import "./Projects.css";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
	const projectsList = [
		{
			title: "artInsider",
			description: "Art Gallery created using React.js and The Harvard Art Museums API.",
			github: "https://github.com/iancuandrei/artInsider",
			link: "https://wildcodeschool.github.io/bucharest-project2-art-gallery/#/",
			skills: ["CSS", "JavaScript", "React", "Git", "Netlify"],
		},
		{
			title: "Travel From Your Couch Hackathon",
			description: "Project for the Travel from your couch Hackathon. Created with React, using a public live webcam API.",
			github: "https://github.com/iancuandrei/hackathon-travel-from-your-couch",
			link: "https://wildcodeschool.github.io/bucharest--travel-from-your-coach-hackathon/",
			skills: ["CSS", "JavaScript", "React", "Git", "Netlify"],
		},
		{
			title: "Trivia Game",
			description: "Trivia game created using the Open Trivia DB API.",
			github: "https://github.com/iancuandrei/trivia-game",
			link: "https://trivia-game1.netlify.app/",
			skills: ["CSS", "JavaScript", "React", "Git", "Netlify"],
		},
		{
			title: "devSource",
			description: "A place for all of your development resources.",
			github: "https://github.com/iancuandrei/devSource",
			link: "https://devsource.netlify.app/",
			skills: ["CSS", "JavaScript", "Git", "Netlify"],
		},
		{
			title: "Todo App",
			description: "Todo App with Local Storage.",
			github: "https://github.com/iancuandrei/todo-app-react",
			link: "https://todo-app-react-material-ui.netlify.app/",
			skills: ["CSS", "JavaScript", "React", "Git", "Netlify", "MaterialUI"],
		},
	];

	return (
		<div className="projectsWrapper">
			<h2>Projects</h2>
			{projectsList.map((project) => (
				<div className="project">
					<div className="project-gradient"></div>
					<div className="projDesc">
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<div className="lang">
							{project.skills.map((skill) => (
								<div className="skill">{skill}</div>
							))}
						</div>
						<div className="buttons">
							<a href={project.link} rel="noopener noreferrer" target="_blank">
								<button className="live">
									<FaExternalLinkAlt className="btnIcon" />
									Live Demo
								</button>
							</a>
							<a href={project.github} rel="noopener noreferrer" target="_blank">
								<button className="source">
									<FaGithubSquare className="btnIcon" />
									Source Code
								</button>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
