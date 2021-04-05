import React, { useState } from "react";
import "./Contact.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const obj = {
			name: name,
			email: email,
			message: message,
		};

		if (name === "" || email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message === "") {
			if (name === "") {
				document.querySelector(".nameInput").classList.add("inputError");
			} else {
				document.querySelector(".nameInput").classList.remove("inputError");
			}

			if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				document.querySelector(".emailInput").classList.add("inputError");
			} else {
				document.querySelector(".emailInput").classList.remove("inputError");
			}

			if (message === "") {
				document.querySelector(".messageInput").classList.add("inputError");
			} else {
				document.querySelector(".messageInput").classList.remove("inputError");
			}

			document.querySelectorAll(".inputError").forEach((error) => {
				error.classList.add("jiggle");
				setTimeout(() => {
					error.classList.remove("jiggle");
				}, 300);
			});
		} else {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...obj }),
			})
				.then(() => {
					document.querySelector(".submitBtn").classList.add("submitted");
					document.querySelector(".submitBtn").innerHTML = "Submitted <span>🎉</span>";
					document.querySelector(".submitBtn").classList.add("zoom");
					setTimeout(() => {
						document.querySelector(".submitBtn").classList.remove("zoom");
					}, 300);
				})
				.catch((error) => alert(error));

			document.querySelector(".nameInput").classList.remove("inputError");
			document.querySelector(".emailInput").classList.remove("inputError");
			document.querySelector(".messageInput").classList.remove("inputError");
		}
	};

	return (
		<div className="contact-ct">
			<div className="contact-content">
				<h2 className="contact">Contact</h2>
				<form name="contact" action="POST">
					<input type="hidden" name="form-name" value="contact" />

					<div className="hidden">
						<label>
							Don’t fill this out if you're human: <input name="bot-field" />
						</label>
					</div>
					<div className="nameEmail">
						<label className="mr">
							Name
							<input type="text" className="nameInput" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
						</label>
						<label>
							Email
							<input
								className="emailInput"
								type="email"
								name="email"
								id="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</div>

					<label>
						Message
						<textarea
							className="messageInput"
							name="message"
							id="message"
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</label>

					<button className="submitBtn" type="submit" onClick={(e) => handleSubmit(e)}>
						Submit
					</button>
				</form>
				<div className="iconWrapper">
					<a href="https://www.linkedin.com/in/iancu-andrei/" rel="noopener noreferrer" target="_blank">
						<AiFillLinkedin className="footerIcon" />
					</a>
					<a href="https://github.com/iancuandrei" rel="noopener noreferrer" target="_blank">
						<AiFillGithub className="footerIcon" />
					</a>
				</div>
			</div>
		</div>
	);
}
