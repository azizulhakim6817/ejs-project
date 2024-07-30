/* ####<<< ejs-1 >>>>>>>>>> Introduction to embedded js >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// ####<<< part-1 >>>>>>>>>> Introduction to embedded js >>>>>>>>>
/*@@@ Contents ??????????????
1. introduction t ejd
2. Passing data to ejs file 
3. if, else in ejs
4. Loop in ejs
5. layout in ejs
6. styling 

@@@ ejs maining => embedded javascript.
*/

/*@@@ index.html => 
    <h1>Name: Aziz</h1>
<p>Profession : students</p>

@@@ index.html => 
    <h1>Name: Shayan </h1>
<p>Profession : baby </p>

@@@ index.html => 
    <h1>Name: Sorna </h1>
<p>Profession : Mindwaife </p> */

// ####<<< part-2 >>>>>>>>>> What is Templating ? Why ???????????????????????
/* 
1. html taplate create => 
    2. Dynamic date add 
3. One html => dynamic add & more data create 

<h1> Name: ________</h1>
<p> Professional : ______________</p> */

// ####<<< part-2 >>>>>>>>>> Templeting language - ejs ???????????????????????
/* 
1. @@@ Templating language : 
1. ejs 
2. Handlebars 
3. pug etc.....
2. Ejs allows us to run plain js in HTML
3. Ejs simple, Ligt weight, Fast
4. Most downloaded templating language on npm.
5. Founded in Feb, 2011
*/

// ####<<< part-3 >>>>>>>>>> How to use ejs ???????????????????????
/* 1. install => npm install ejs
=> app.set("view engine" "ejs") */

/* 2. Views -> index.ejs
-> res.render("index", {})  */

// ####<<< part-4 >>>>>>>>>> Start porject ???????????????????????
/* 
@@@ 1. Terminal => npm init --y 
@@@ 2. Terminal =>  npm install express ejs nodemon

 */
/* ####<<< ejs-5 >>>>>>>>>> Layout >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// ####<<< part-1 >>>>>>>>>> Introduction to embedded js >>>>>>>>>

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4040;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let planguages = [];

app.get("/", (req, res) => {
  res.render("index", { plNames: planguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const planguage = req.body.planguage;
  planguages.push(planguage);
  //console.log(planguage);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
