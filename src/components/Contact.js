import React, { useState } from "react";
import "./Contact.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default function Contact() {
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [message, setMessage] = useState(null)

	const handleSubmit = (e) => {
		const obj = {
			name: name,
			email: email,
			message: message
		}

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", obj })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
	}

	return (
		<div class="form">
			<h2 class="contact">Contact</h2>
			<form name="contact" action="POST" >
				<input type="hidden" name="form-name" value="contact" />

				<div class="hidden">
					<label>
						Don’t fill this out if you're human: <input name="bot-field" />
					</label>
				</div>
				<div className="nameEmail">
					<label className="mr">
						Name
						<input type="text" name="name" id="name" required value={name} onChange={e => setName(e.target.value)} />
					</label>
					<label>
						Email
						<input type="email" name="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} />
					</label>
				</div>

				<label>
					Message
					<textarea name="message" id="message" required value={message} onChange={e => setMessage(e.target.value)}></textarea>
				</label>

				<button type="submit" onClick={e => handleSubmit(e)}>Submit</button>
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
