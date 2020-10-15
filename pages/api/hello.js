// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";

// this is NOT a real key!
const KEY = "asdfkhbaefjbh";

export default (req, res) => {
	if (!req.body) {
		res.statusCode = 404;
		res.end("Error");
		return;
	}
	const { username, password } = req.body;

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
