import React from "react";
import "./Contact.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
	return (
		<div class="form">
			<h2 class="contact">Contact</h2>
			<form name="contact" action="POST" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />

				<div class="hidden">
					<label>
						Don’t fill this out if you're human: <input name="bot-field" />
					</label>
				</div>
				<div className="nameEmail">
					<label className="mr">
						Name
						<input type="text" name="name" id="name" required />
					</label>
					<label>
						Email
						<input type="email" name="email" id="email" required />
					</label>
				</div>

				<label>
					Message
					<textarea name="message" id="message" required></textarea>
				</label>

				<button type="submit">Submit</button>
			</form>
			<div>
				<a href="https://www.linkedin.com/in/iancu-andrei/" rel="noopener noreferrer" target="_blank">
					<AiFillLinkedin className="footerIcon" />
				</a>
				<a href="https://github.com/iancuandrei" rel="noopener noreferrer" target="_blank">
					<AiFillGithub className="footerIcon" />
				</a>
			</div>
		</div>
	);
}
