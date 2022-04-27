const express = require("express");
const router = express.Router();
const feedbacks = require("../src/nodejs/feedbacks");

router.post("/api/feeds", (req, res) => {
   const feed = req.body;
   feedbacks.addFeed(feedbacks.feedbacks, feed);
   res.json({msg: "Successfully!!!", length: feedbacks.feedbacks.length});
});

router.post("/api/comment", (req, res) => {
   feedbacks.addComment(feedbacks.feedbacks, req.body);
   res.json({msg: "Successfully!!!"});
});

router.post("/api/deleteComment", (req, res) => {
   feedbacks.delComment(feedbacks.feedbacks, req.body);
   res.json({msg: "Successfully!!!"});
});

router.post("/api/editComment", (req, res) => {
   feedbacks.editCom(feedbacks.feedbacks, req.body);
   res.json({msg: "Successfully!!!"});
});

module.exports = router;
