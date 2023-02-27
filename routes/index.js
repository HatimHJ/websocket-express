var express = require("express");
var router = express.Router();

const path = require("path");
const { readFileSync } = require("fs");

const filePath = path.join(__dirname + "/../", "data.txt");

/* GET home page. */
router.get("/", function (req, res, next) {
	const first = readFileSync(filePath, "utf8");
	const msgs = first.split("\n").filter((el) => el !== "");
	res.render("index", { title: "Express", allMsg: msgs });
});

module.exports = router;
