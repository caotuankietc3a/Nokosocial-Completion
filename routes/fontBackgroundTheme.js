const express = require("express");
const router = express.Router();
const fontBgTheme = require("../src/nodejs/font_bg_theme");

router.get("/api/fontSize", (req, res) => {
   res.json(fontBgTheme.font);
});

router.post("/api/fontSize", (req, res) => {
   fontBgTheme.font = req.body;
   res.json({msg: "Successfully!!!"});
});

router.get("/api/theme", (req, res) => {
   res.json(fontBgTheme.theme);
});

router.post("/api/theme", (req, res) => {
   fontBgTheme.theme = req.body;
   res.json({msg: "Successfully!!!"});
});

router.get("/api/background", (req, res) => {
   res.json(fontBgTheme.background);
});

router.post("/api/background", (req, res) => {
   fontBgTheme.background = req.body;
   res.json({msg: "Successfully!!!"});
});

module.exports = router;
