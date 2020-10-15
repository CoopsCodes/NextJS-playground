import { useState } from "react";
import jwt from "jsonwebtoken";

export default function Form() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [message, setMessage] = useState("You are not logged in");

	async function submitForm() {
		const res = await fetch("./api/hello", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((t) => t.json());

		const token = res.token;

		if (token) {
			const json = jwt.decode(token);
			console.log("json", json);
			setMessage(
				`Welcome ${json.username}, you are ${
					json.admin ? "an admin" : "not an admin"
				}`
			);
		} else {
			setMessage(`Oops try again`);
		}
	}
	return (
		<div>
			<h1>{message}</h1>
			<form>
				<input
					type="text"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input type="button" value="Login" onClick={submitForm} />
				<br />
			</form>
		</div>
	);
}
