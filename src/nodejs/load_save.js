const fs = require("fs");
const path = require("path");
// =========================== Load and Save date to File ================

const saveFiles = function (nameFile, data) {
   const dirFile = path.join(__dirname, "dbfiles", `${nameFile}.json`);
   fs.writeFileSync(dirFile, JSON.stringify(data));
}

const loadFiles = function (nameFile) {
   try {
      const dirFile = path.join(__dirname, "dbfiles", `${nameFile}.json`);
      const dataBuffer = fs.readFileSync(dirFile);
      const dataJson = dataBuffer.toString();
      return JSON.parse(dataJson);
   } catch (e) {
      return [];
   }
}

const displayRadomElement = function (el) {
   const size = el.length;
   const filledArr = new Array(size).fill(false, 0);
   const newEls = new Array(size);
   for (let i = 0; i < size; i++) {
      while (true) {
         const randomNum = Math.floor(Math.random() * (size));
         if (!filledArr[randomNum]) {
            newEls[randomNum] = el[i];
            filledArr[randomNum] = true;
            break;
         }
      }
   }
   return newEls;
}

module.exports = {
   loadFiles,
   saveFiles,
   displayRadomElement
}
