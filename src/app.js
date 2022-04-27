const express = require("express");
const app = express();
const path = require("path");
const {engine} = require("express-handlebars");
const port = process.env.PORT || 3000;
const fontBgTheme = require("../routes/fontBackgroundTheme");
const feedComment = require("../routes/feedbackComment");
const friendRequests = require("../routes/friendRequests");
const admin = require("../routes/admin");

// Body Parser Middleware
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: false}));

app.engine('handlebars', engine({
   defaultLayout: 'main',
   layoutsDir: __dirname + "/resources/views/layouts",
   partialsDir: __dirname + "/resources/views/partials"
}));
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "/resources/views"))

// Set static folder
app.use(express.static(path.join(__dirname, "public")));


app.use(admin);
app.use(fontBgTheme);
app.use(friendRequests);
app.use(feedComment);

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
