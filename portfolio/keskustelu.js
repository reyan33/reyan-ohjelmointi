import { saveComments, commentsData } from "./utils.js";

const checkBox = document.getElementById("check")
const form = document.getElementById("form");
 
form.addEventListener("submit", (e)=>{
  if(checkBox.checked == true){

    e.preventDefault();
    const data = new FormData(form);
    commentsData.push(
      {
        message: data.get("message"),
        author: data.get("email"),
        timestamp: data.get("paiva")
      }
    )
    saveComments();
    window.location.href = "./aiemat_kommentit.html";
  }
});
const dialog = document.getElementById("commentDialog");
const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());