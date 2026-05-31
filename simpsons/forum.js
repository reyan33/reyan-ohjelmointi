const messages = [
  {
    sender: "mr customer",
    date: "2010-05-10",
    title: "looking for someone",
    body: "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?",
  },

  {
    sender: "Moe",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "Let's ask around. What's his name?",
  },

  {
    sender: "mr customer",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "Yeah, his name is Seymore Butz.",
  },

  {
    sender: "Moe",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "Is there a Butz here? Everybody! I wanna Seymore Butz!",
  },

  {
    sender: "Barney",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "LOL",
  },

  {
    sender: "Moe",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!",
  },

  {
    sender: "mr customer",
    date: "2010-05-10",
    title: "re: looking for someone",
    body: "😂😂😂😂😂😂😂😂😂😂😂",
  },
];

// ELEMENTS
const messageList = document.getElementById("messageList");

const dialog = document.getElementById("messageDialog");

const openDialogBtn = document.getElementById("openDialogBtn");

const cancelBtn = document.getElementById("cancelBtn");

const form = document.getElementById("messageForm");

// PRINT MESSAGES
function renderMessages() {
  messageList.innerHTML = "";

  messages.forEach((message) => {
    const card = document.createElement("div");

    card.classList.add("message-card");

    card.innerHTML = `
      <div class="message-top">

        <div class="message-sender">
          ${message.sender}
        </div>

        <div class="message-date">
          ${message.date}
        </div>

      </div>

      <div class="message-title">
        ${message.title}
      </div>

      <div class="message-body">
       ${message.body}
      </div>
    `;

    messageList.appendChild(card);
  });
}

// OPEN DIALOG
openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

// CANCEL BUTTON
cancelBtn.addEventListener("click", () => {
  dialog.close();
});

// FORM SUBMIT
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // TODAY DATE
  const today = new Date();

  const formattedDate = today.toLocaleDateString("fi-FI");

  // NEW MESSAGE OBJECT
  const newMessage = {
    sender: document.getElementById("sender").value,

    title: document.getElementById("title").value,

    body: document.getElementById("body").value,

    date: formattedDate,
  };

  // ADD MESSAGE
  messages.unshift(newMessage);

  // RENDER AGAIN
  renderMessages();

  // RESET FORM
  form.reset();

  // CLOSE DIALOG
  dialog.close();
});

// INITIAL RENDER
renderMessages();
