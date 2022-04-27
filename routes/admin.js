const express = require("express");
const router = express.Router();
const fileMethod = require("../src/nodejs/load_save");
const reqMethod = require("../src/nodejs/requests");
const stories = require("../src/nodejs/stories");
const feedbacks = require("../src/nodejs/feedbacks");

router.get("/", (req, res) => {
   reqMethod.friends = fileMethod.displayRadomElement(reqMethod.friends);
   reqMethod.requestFriends = fileMethod.displayRadomElement(reqMethod.requestFriends);
   feedbacks.feedbacks = fileMethod.displayRadomElement(feedbacks.feedbacks);
   res.render("index", {
      requests: reqMethod.friends,
      requestFriends: reqMethod.requestFriends,
      feedbacks: feedbacks.feedbacks,
      stories: stories.stories
   });
})

module.exports = router;
