const express = require("express");
const router = express.Router();
const reqMethod = require("../src/nodejs/requests");

router.post("/api/friends", (req, res) => {
   const friend = req.body;
   reqMethod.addFriend(reqMethod.friends, friend);
   reqMethod.removeFriend(reqMethod.requestFriends, friend);
   res.send("Successfully!!!");
});

router.post("/api/requests", (req, res) => {
   const friend = req.body;
   reqMethod.removeFriend(reqMethod.requestFriends, friend);
   res.send("Successfully!!!");
});

module.exports = router;
