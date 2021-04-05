import React from "react";
import "./Projects.css";
import devsource from "../images/devsource2-min.png";
import artinsider from "../images/artinsider2-min.png";
import travel from "../images/travel.png";
import todoapp from "../images/todoapp.png";
import trivia from "../images/triviagame.png";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
	return (
		<div className="projectsWrapper">
			<h2>Projects</h2>
			<div className="project">
				<img alt="project screenshot" src={artinsider}></img>
				<div className="projDesc">
					<h2>artInsider</h2>
					<p>Art Gallery created using React.js and The Harvard Art Museums API.</p>
					<div className="lang">
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">React</div>
						<div className="skill">Git</div>
						<div className="skill">Netlify</div>
					</div>
					<div className="buttons">
						<a href="https://wildcodeschool.github.io/bucharest-project2-art-gallery/#/" rel="noopener noreferrer" target="_blank">
							<button className="live">
								{" "}
								<FaExternalLinkAlt className="btnIcon" />
								Live Demo
							</button>
						</a>
						<a href="https://github.com/iancuandrei/artInsider" rel="noopener noreferrer" target="_blank">
							<button className="source">
								{" "}
								<FaGithubSquare className="btnIcon" />
								Source Code
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="project reverse">
				<img alt="project screenshot" src={travel}></img>
				<div className="projDesc">
					<h2>Travel From Your Couch Hackathon</h2>
					<p>Project for the Travel from your couch Hackathon. Created with React, using a public live webcam API.</p>
					<div className="lang">
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">React</div>
						<div className="skill">Git</div>
						<div className="skill">Netlify</div>
					</div>
					<div className="buttons">
						<a href="https://wildcodeschool.github.io/bucharest--travel-from-your-coach-hackathon/" rel="noopener noreferrer" target="_blank">
							<button className="live">
								{" "}
								<FaExternalLinkAlt className="btnIcon" />
								Live Demo
							</button>
						</a>
						<a href="https://github.com/iancuandrei/hackathon-travel-from-your-couch" rel="noopener noreferrer" target="_blank">
							<button className="source">
								{" "}
								<FaGithubSquare className="btnIcon" />
								Source Code
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="project">
				<img alt="project screenshot" src={trivia}></img>
				<div className="projDesc">
					<h2>Trivia Game</h2>
					<p>Trivia game created using the Open Trivia DB API. </p>
					<div className="lang">
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">React</div>
						<div className="skill">Git</div>
						<div className="skill">Netlify</div>
					</div>
					<div className="buttons">
						<a href="https://trivia-game1.netlify.app/" rel="noopener noreferrer" target="_blank">
							<button className="live">
								{" "}
								<FaExternalLinkAlt className="btnIcon" />
								Live Demo
							</button>
						</a>
						<a href="https://github.com/iancuandrei/trivia-game" rel="noopener noreferrer" target="_blank">
							<button className="source">
								{" "}
								<FaGithubSquare className="btnIcon" />
								Source Code
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="project  reverse">
				<img alt="project screenshot" src={devsource}></img>
				<div className="projDesc">
					<h2>devSource</h2>
					<p>A place for all of your development resources</p>
					<div className="lang">
						<div className="skill">HTML</div>
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">Git</div>
						<div className="skill">Netlify</div>
					</div>
					<div className="buttons">
						<a href="https://devsource.netlify.app/" rel="noopener noreferrer" target="_blank">
							<button className="live">
								{" "}
								<FaExternalLinkAlt className="btnIcon" />
								Live Demo
							</button>
						</a>
						<a href="https://github.com/iancuandrei/devSource" rel="noopener noreferrer" target="_blank">
							<button className="source">
								{" "}
								<FaGithubSquare className="btnIcon" />
								Source Code
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="project">
				<img class="todo" alt="project screenshot" src={todoapp}></img>
				<div className="projDesc">
					<h2>Todo App</h2>
					<p>Todo App with Local Storage</p>
					<div className="lang">
						<div className="skill">React</div>
						<div className="skill">CSS</div>
						<div className="skill">JavaScript</div>
						<div className="skill">Git</div>
						<div className="skill">Netlify</div>
						<div className="skill">MaterialUI</div>
					</div>
					<div className="buttons">
						<a href="https://todo-app-react-material-ui.netlify.app/" rel="noopener noreferrer" target="_blank">
							<button className="live">
								{" "}
								<FaExternalLinkAlt className="btnIcon" />
								Live Demo
							</button>
						</a>
						<a href="https://github.com/iancuandrei/todo-app-react" rel="noopener noreferrer" target="_blank">
							<button className="source">
								{" "}
								<FaGithubSquare className="btnIcon" />
								Source Code
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
