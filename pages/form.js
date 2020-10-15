import Link from "next/link";
import { useState } from "react";
import jwt from "jsonwebtoken";

export default function Form() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [message, setMessage] = useState("You are not logged in");
	const [secret, setSecret] = useState("");

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

			const res = await fetch("./api/secret", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token }),
			}).then((t) => t.json());

			if (res.secretAdminCode) {
				setSecret(res.secretAdminCode);
			} else {
				setSecret("Whomp Whomp");
			}
		} else {
			setMessage(`Oops try again`);
		}
	}
	return (
		<div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<h1>{message}</h1>
			<h1>Secret: {secret}</h1>
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
