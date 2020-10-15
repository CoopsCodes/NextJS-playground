// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";

const KEY = "ashdgfvkeuwv";

export default (req, res) => {
	if (!req.body) {
		res.statusCode = 404;
		res.end("Error");
		return;
	}
	const { username, password } = req.body;
	// console.log("username", username);
	// console.log("password", password);
	// res.statusCode = 200;
	res.json({
		token: jwt.sign(
			{
				username,
				admin: username === "admin" && password === "admin",
			},
			KEY
		),
	});
};
