import {commentsData} from "./utils.js"
let html = "";
commentsData.forEach((c)=>{
 html += `
    <article>
            <p>${c.message}</p>
            <p><strong>Lähettäjä:</strong> ${c.author}</p>
            <p><small>${c.timestamp}</small></p>
        </article>
        <hr>
  `
})
document.querySelector(".comments").innerHTML = html;