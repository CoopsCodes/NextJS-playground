import jwt from "jsonwebtoken";

const KEY = "asdfkhbaefjbh";

export default function (req, res) {
	const { token } = req.body;

	const { admin } = jwt.verify(token, KEY);

	if (admin) {
		res.json({ secretAdminCode: 12345 });
	} else {
		res.json({ admin: false });
	}
}
