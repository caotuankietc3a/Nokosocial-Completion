const fileMethod = require("./load_save");
let feedbacks = [
   {
      src: ["images/kiritoW3.jpg", "images/kiritoSolo.jpg", "images/kiritoW1.jpg", "images/kiritoW3.jpg", "images/kiritoW2.jpg"],
      h3: "Kirito-kun solos with boss.",
      small: "Sword Air Online, 2 days ago",
      b: ["Kirito-kun with Boss", "5,977 others"],
      commentPopup: [],
      status: true
   },
   {
      src: ["images/kiritoW2.jpg", "images/kirito1.png", "images/kiritoW.jpg", "images/kiritoW1.jpg", "images/kiritoW3.jpg"],
      h3: "Kirito-kun and Asuna-san",
      small: "Pleiku, 15 minutes ago", b: ["Kirito-kun 1", "2,300 others"],
      commentPopup: [],
      status: true
   },
   {
      src: ["images/kiritoW6.jpeg", "images/asuna.png", "images/kiritoW2.jpg", "images/kiritoW4.jpg", "images/kiritoW1.jpg"],
      h3: "Asuna-san",
      small: "Sai Gon, 55 minutes ago",
      b: ["Asuna", "2,377 others"],
      commentPopup: [],
      status: true
   },
   {
      src: ["images/kiritoW1.jpg", "images/kirito6.jpg", "images/kiritoW2.jpg", "images/kiritoW4.jpg", "images/kiritoW3.jpg"],
      h3: "Kirito-kun, Asuna-san and their friends",
      small: "Sai Gon, 55 minutes ago",
      b: ["Kirito-kun and their friends", "2,977 others"],
      commentPopup: [],
      status: true
   }
]


const addFeed = function (el, feed) {
   el.push(feed);
}

const addComment = function (el, comment) {
   el[comment.id].commentPopup.push(comment.text);
}

const delComment = function (el, comment) {
   const index = el[comment.indexComment].commentPopup.indexOf(comment.TEXT);
   el[comment.indexComment].commentPopup.splice(index, 1);
}

const editCom = function (el, com) {
   const index = el[com.indexComment].commentPopup.indexOf(com.oldText);
   el[com.indexComment].commentPopup[index] = com.newText;
   console.log(el[com.indexComment].commentPopup);
}

module.exports = {
   feedbacks,
   addFeed,
   addComment,
   delComment,
   editCom
}
