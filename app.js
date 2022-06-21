const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare
  .goto("https://www.hackerrank.com/auth/login")
  .type("#input-1", "username") //YOUR CREDENTIALS
  .type("#input-2", "password") //YOUR CREDENTIALS
  .click(
    "#tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button"
  )
  .wait()
  .end()
  .then(console.log)
  .catch((error) => {
    console.error("Search failed:", error);
  });

//wait for submissions button

//go there

//get all accepted answers

//make array for each

//keep the most recent, passing/highest scores

//copy each URL and write to file with correct extension

//push to github
