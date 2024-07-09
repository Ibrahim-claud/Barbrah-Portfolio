//
//-- JavaScript for form
//-- to validate form
//-- and to check for empty fills
//-- before submitting form
//
//

//==== input fills variables ====
const emailAddress = document.getElementById("email-address");
const contactSubject = document.getElementById("contact-subject");
const projectIdea = document.getElementById("project-idea");
const sendButton = document.getElementById("send-btn");

//==== no input fills error text variables ====
const noEmail = document.getElementById("no-email");
const noSubject = document.getElementById("no-subject");
const noMessage = document.getElementById("no-message");

//==== Success message variables ====
const successfulMessage = document.getElementById("successful");

//==== Creating LocalStorage ====
let messages = JSON.parse(localStorage.getItem("messages-list"));

//..................................................................
//..................................................................
//==== Function to push into LocalStorage ====
sendButton.addEventListener("click", () => {
  //-- receiving user input from fills..
  let emailMessage = emailAddress.value.trim(); //- receiving from email fill
  let subjectMessage = contactSubject.value.trim(); //- receiving from subject fill
  let ideaMessage = projectIdea.value.trim(); //- receiving from idea fill

  //- calling empty fills Fnc
  checkEmptyFills(emailMessage, subjectMessage, ideaMessage);

  //- Condition to validate email
  if (
    !emailAddress.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    noEmail.textContent = "Please enter a valid email Address";
    emailAddress.style.border = "2px solid red";
    emailAddress.value = "";
  } else {
    //- send message ...
    if (emailMessage && subjectMessage && ideaMessage) {
      if (!messages) {
        //if messages doest not exit pass empty array to messages
        messages = [];
      }

      //creating object for messages value
      let messageInfo = {
        email: emailMessage,
        subject: subjectMessage,
        idea: ideaMessage,
      };

      messages.push(messageInfo);
      localStorage.setItem("messages-list", JSON.stringify(messages));
      emailAddress.value = "";
      contactSubject.value = "";
      projectIdea.value = "";

      removeForm(); //-calling remove form Fnc ...
    }
  }
});

//..................................................
//..................................................
//====Function to check for empty fills ====
const checkEmptyFills = (email, subject, idea) => {
  //- checking email empty fill
  if (!email) {
    noEmail.textContent = "Please enter a valid Email Address";
    emailAddress.style.border = "2px solid red";
  } else {
    noEmail.textContent = "";
  }

  //- checking subject empty fill
  if (!subject) {
    noSubject.textContent = "Please enter Subject";
    contactSubject.style.border = "2px solid red";
  } else {
    noSubject.textContent = "";
  }

  //- checking idea empty fill
  if (!idea) {
    noMessage.textContent = "Please enter Message";
    projectIdea.style.border = "2px solid red";
  } else {
    noMessage.textContent = "";
  }
};

//................................
//................................
//==== Remove form Function ====
const removeForm = () => {
  emailAddress.remove();
  contactSubject.remove();
  projectIdea.remove();
  sendButton.remove();

  //- print send successfully message
  successfulMessage.innerHTML =
    "<p class='successful animate__animated animate__zoomIn animate__delay-1s'>Message send <span class='success-green'>SUCCESSFULLY</span>. Thank You.</p>";
};
