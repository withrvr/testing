const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/foo", (req, res) => {
	res.send("this is foo bar page");
});

app.listen(PORT, () => {
	console.log(`Server is Running at ${PORT}`);
});
