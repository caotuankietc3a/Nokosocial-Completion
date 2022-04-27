"use strict"

// ============================= Like ===========================
let timeHidden = 0;
let timeShow = 0;

function likeOneImg() {
   const likeHead = this.children[0];

   if (!this.classList.contains("LIKE")) {
      likeHead.style.color = "#099BFA";
      this.classList.add("LIKE");
      insertImg(this, "Kiet Cao, ");
      likeHead.innerHTML = `
         <i class="fas fa-thumbs-up"></i>
         <span>Like</span>
      `
   }
   else {
      this.style.color = "";
      deleteImg(this, "Kiet Cao, ");
      this.classList.remove("LIKE");
      this.style.color = "";
      this.children[0].style.color = "";
      likeHead.innerHTML = `
         <i class="uil uil-thumbs-up"></i>
         <span>Like</span>
      `
   }
   removeAniLike(animationLikes);
}

function mouseEnterLike() {
   clearTimer();
   timeShow = setTimeout(() => {
      this.lastElementChild.classList.add("animateLIKE");
   }, 100);
}

function mouseLeaveLike() {
   clearTimer();
   timeHidden = setTimeout(() => {
      this.lastElementChild.classList.remove("animateLIKE");
   }, 100);
}

let Like = document.querySelectorAll(".like-comment-share .like");
Like.forEach(item => item.addEventListener("click", likeOneImg))
Like.forEach(item => item.addEventListener("mouseenter", mouseEnterLike))
Like.forEach(item => item.addEventListener("mouseleave", mouseLeaveLike))

function clearTimer() {
   if (timeShow > 0) {
      clearTimeout(timeShow);
      timeShow = 0;
   }
   if (timeHidden > 0) {
      clearTimeout(timeHidden);
      timeHidden = 0;
   }
}

function removeAniLike(els) {
   els.forEach(item => {
      setTimeout(() => {
         item.classList.remove("animateLIKE");
      }, 0)
   });
}

function insertImg(el, val, textP = "") {
   const item = el.parentElement.previousElementSibling;
   const myImg = document.createElement("span");
   myImg.innerHTML = `
      <img src="/images/kiritoG.jpg">
   `
   item.insertBefore(myImg, item.lastElementChild);
   const boldEl = item.lastElementChild.querySelector("b");
   const newText = document.createTextNode(textP);
   item.lastElementChild.insertBefore(newText, boldEl);
   boldEl.textContent = val + boldEl.textContent;
}

function deleteImg(el, val, check = false) {
   const item = el.parentElement.previousElementSibling;
   const boldEl = item.lastElementChild.querySelector("b");
   if (check === true) {
      const pEl = item.lastElementChild;
      pEl.innerHTML = "<b></b>";
   }
   else {
      boldEl.textContent = boldEl.textContent.replace(val, "");
   }
   item.removeChild(item.lastElementChild.previousElementSibling);
}

const animationLikes = document.querySelectorAll(".like-comment-share .animation-like");

animationLikes.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.stopPropagation();
   });
});

function animationEmojiLike(item, index) {
   const likeHeading = item.parentElement.parentElement.previousElementSibling;
   const likeParent = item.parentElement.parentElement.parentElement;
   item.addEventListener("click", () => {
      if (index === 0) {
         likeHeading.innerHTML = `
               <i class="fas fa-thumbs-up"></i>
               <span>Like</span>
            `
         likeHeading.style.color = "#099BFA";
      }
      else if (index === 1) {
         likeHeading.innerHTML = `
               <i class="fas fa-heart"></i>
               <span>Love</span>
            `
         likeHeading.style.color = "#ff243a";
      }
      else if (index === 2) {
         likeHeading.innerHTML = `
               <i class="fas fa-laugh-squint"></i>
               <span>Haha</span>
            `
         likeHeading.style.color = "#F4F55B";
      }
      else if (index === 3) {
         likeHeading.innerHTML = `
               <i class="fas fa-surprise"></i>
               <span>Wow</span>
            `
         likeHeading.style.color = "#ffe24f";
      }
      else if (index === 4) {
         likeHeading.innerHTML = `
               <i class="fas fa-sad-tear"></i>
               <span>Sad</span>
            `
         likeHeading.style.color = "#f200ff";
      }
      else {
         likeHeading.innerHTML = `
               <i class="fas fa-angry"></i>
               <span>Angry</span>
            `
         likeHeading.style.color = "#ff4d00";
      }
      if (!likeParent.classList.contains("LIKE")) {

         insertImg(likeParent, "Kiet Cao, ");
         likeParent.classList.add("LIKE");
      }

      setTimeout(() => {
         item.parentElement.parentElement.classList.remove("animateLIKE");
      }, 0)

   });

   item.addEventListener("mouseenter", () => {
      item.previousElementSibling.style.visibility = "visible";
   });

   item.addEventListener("mouseleave", () => {
      item.previousElementSibling.style.visibility = "hidden";
   });
}

animationLikes.forEach(aniLike => {
   aniLike.querySelectorAll("span i").forEach(animationEmojiLike);
});

// ======================================= Comment ==========================
let Comment = document.querySelectorAll(".like-comment-share .comment");
Comment.forEach(item => item.addEventListener("click", commentFunc));

function commentFunc() {
   if (!this.classList.contains("isCOMMENT")) {
      this.classList.add("isCOMMENT");
      this.parentElement.nextElementSibling.nextElementSibling.style.display = "flex";
   }
   else {
      this.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
      this.classList.remove("isCOMMENT");
   }
}

// let indexComment = 0;
// let iGlobal = 0;
// let iGlobalEdit = 0;
const commentTexts = document.querySelectorAll(".COMMENT textarea");
commentTexts.forEach((item, index) => {
   // let iGlobal = 0;
   // iGlobalEdit = 0;
   item.addEventListener("input", autoResize, false);
   item.addEventListener("keypress", function (e) {
      // let indexArr = [];
      let indexComment = index;
      checkEnter(e, indexComment);
   });
})

function autoResize() {
   this.style.height = 'auto';
   this.style.height = this.scrollHeight + 'px';
}


async function checkEnter(e, indexComment) {
   const keycode = e.which || e.keyCode;
   if (keycode === 13 && !e.shiftKey) {
      e.preventDefault();
      let oldText = e.target.value;
      if (!oldText.trim()) {
         e.preventDefault();
         return;
      }
      // let oldHeight = e.target.style.height;

      const arrTEXT = convertString(oldText);
      const TEXT = arrTEXT.join("<br>");
      e.target.value = "";

      const newDiv = document.createElement("div");
      newDiv.className = "commentAdding";
      newDiv.innerHTML = `
         <div class="profile-photo">
            <img src="./images/kiritoG.jpg">
         </div>
         <div class="comment-text">
            <h4>Cao Kiet</h4>
            <p class="edit-text-comment"></p>
         </div>
         <div class="emoji-comment">
            <div class="edit-delete-center">
               <div class="edit-delete">
                  <div class="emoji-common edit-comment">
                     <i class="uil uil-pen"></i><span>Edit</span>
                  </div>
                  <div class="emoji-common delete-comment">
                     <i class="uil uil-trash-alt"></i><span>Delete</span>
                  </div>
               </div>
               <span class="span"><i class="uil uil-ellipsis-h"></i></span>
            </div>
         </div>
      `
      const editTextComment = newDiv.querySelector(".comment-text .edit-text-comment");
      const commentPopup = e.target.parentElement.previousElementSibling;
      commentAdding(newDiv, commentPopup, editTextComment, TEXT, indexComment);
      e.target.style.height = "auto";
      editTextComment.innerHTML = TEXT;
      commentPopup.appendChild(newDiv);

      const correctFeed = {
         id: indexComment,
         text: TEXT
      }
      const data = await postData(correctFeed, "comment");
   }
}

function commentAdding(newDiv, commentPopup, editTextComment, TEXT = "", indexCom) {
   const editDelete = newDiv.querySelector(".edit-delete");
   const editComment = newDiv.querySelector(".emoji-comment .edit-delete-center .edit-delete .edit-comment");
   const deleteComment = newDiv.querySelector(".emoji-comment .edit-delete-center .edit-delete .delete-comment");
   const span = newDiv.querySelector(".emoji-comment .edit-delete-center .span");

   span.addEventListener("click", () => {
      if (!editDelete.classList.contains("display")) {
         editDelete.style.display = "block";
         editDelete.classList.add("display");
      }
      else {
         editDelete.style.display = "none";
         editDelete.classList.remove("display");
      }
   })

   deleteComment.addEventListener("click", async () => {
      commentPopup.removeChild(newDiv);
      editDelete.classList.remove("display");
      const data = await postData({TEXT, indexComment: indexCom}, "deleteComment");
   })

   editComment.addEventListener("click", () => {
      editDelete.style.display = "none";
      editDelete.classList.remove("display");
      newDiv.style.display = "none";

      const divComment = document.createElement("div");
      divComment.className = "COMMENT";
      divComment.innerHTML = `
            <div class="profile-photo">
               <img src="./images/kiritoG.jpg">
            </div>
            <textarea type="text" class="write-comment" rows="1"
               placeholder="Write your comment...."></textarea>
         `
      divComment.style.display = "flex";
      const textAREA = divComment.querySelector("textarea");
      const textValArea = newDiv.querySelector(".comment-text p");
      textAREA.value = textValArea.innerHTML.split("<br>").join("\n");
      autoResize.call(textAREA);
      textAREA.addEventListener("input", autoResize, false);

      setTimeout(() => {
         autoResize.call(textAREA);
         textAREA.focus();
         textAREA.setSelectionRange(textAREA.value.length, textAREA.value.length);
      }, 0);

      divComment.addEventListener("keypress", async (event) => {
         const key = event.which || event.keyCode;
         if (key === 13 && !event.shiftKey) {
            const oldT = event.target.value;
            if (!oldT.trim()) {
               event.preventDefault();
               return;
            }

            const arrNewTEXT = convertString(oldT);
            const newTEXT = arrNewTEXT.join("<br>")

            editTextComment.innerHTML = newTEXT;


            newDiv.style.display = "flex";
            divComment.remove();
            event.preventDefault();

            const editFeed = {
               indexComment: indexCom,
               newText: newTEXT,
               oldText: TEXT
            }
            const data = await postData(editFeed, "editComment");
         }
      });
      commentPopup.insertBefore(divComment, newDiv);
   });
}

const comment_Popup = document.querySelectorAll(".comment-popup");
comment_Popup.forEach((commentPopup, index) => {
   let indexCom = index;
   commentPopup.querySelectorAll(".commentAdding")?.forEach(function (item) {
      const TEXT = item.querySelector(".comment-text p").innerHTML;
      const editTextComment = item.querySelector(".comment-text .edit-text-comment");
      commentAdding(item, commentPopup, editTextComment, TEXT, indexCom);
   })
});

function convertString(oldString) {
   let arrStr = oldString.trim().split("\n");

   let newArrStr = arrStr
      .map(str => str.trim())
      .filter(str => str.length > 0)
      .map(str => {
         return str.split(" ").filter(x => x.length > 0).join(" ");
      });
   return newArrStr;
}
