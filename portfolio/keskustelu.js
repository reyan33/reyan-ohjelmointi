import { saveComments, commentsData } from "./utils.js";

const checkBox = document.getElementById("check")
const form = document.getElementById("form");
 
/* form.addEventListener("submit", (e)=>{
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
}); */

const dialog = document.getElementById("commentDialog");
const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

function send(e) {
    e.preventDefault();

    const birthdayField = document.getElementById("paiva");
    const emailField = document.getElementById("email");
    const typeField = document.getElementById("type");
    const usageField = document.getElementById("check");
    const bodyField = document.getElementById("message");

    const birthday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const usage = usageField.checked;
    const body = bodyField.value;

    console.log("birthday:", birthday);
    console.log("email:", email);
    console.log("type:", type);
    console.log("usage:", usage);
    console.log("body:", body);

    dialog.close();
}
window.send = send;