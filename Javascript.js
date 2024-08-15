document.querySelector("button").addEventListener("click", function () {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#emailAddress");
  const generalEnquiry = document.querySelector("#generalEnquiry");
  const supportRequest = document.querySelector("#supportRequest");
  const generalEnquiryDiv = document.querySelector(".generalEnquiry");
  const supportRequestDiv = document.querySelector(".supportRequest");
  const message = document.querySelector("#message");
  const beingconsent = document.querySelector("#beingconsent");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorFirstName = document.querySelector("#errorFirstName");
  const errorLastName = document.querySelector("#errorLastName");
  const errorEmail = document.querySelector("#errorEmail");
  const errorRadio = document.querySelector("#errorRadio");
  const errorbeingconsent = document.querySelector("#errorbeingconsent");
  const errorMessage = document.querySelector("#errorMessage");

  if (email.value.trim() === "") {
    errorEmail.textContent = "Please enter your email address.";
    errorEmail.style.display = "block";
    email.classList.add("error-border");
  } else if (!email.value.match(pattern)) {
    errorEmail.textContent = "Please enter a valid email address.";
    errorEmail.style.display = "block";
    email.classList.add("error-border");
  } else {
    errorEmail.textContent = "";
    errorEmail.style.display = "none";
    email.classList.remove("error-border");
  }

  if (firstName.value.trim() === "") {
    errorFirstName.textContent = "Please enter your first name.";
    errorFirstName.style.display = "block";
    firstName.classList.add("error-border");
  } else {
    errorFirstName.style.display = "none";
    firstName.classList.remove("error-border");
  }

  if (lastName.value.trim() === "") {
    errorLastName.textContent = "Please enter your last name.";
    errorLastName.style.display = "block";
    lastName.classList.add("error-border");
  } else {
    errorLastName.style.display = "none";
    lastName.classList.remove("error-border");
  }

  if (!generalEnquiry.checked && !supportRequest.checked) {
    errorRadio.textContent = "Please select a query type.";
    errorRadio.style.display = "block";
    generalEnquiryDiv.classList.add("error-border");
    supportRequestDiv.classList.add("error-border");
  } else {
    errorRadio.style.display = "none";
    generalEnquiryDiv.classList.remove("error-border");
    supportRequestDiv.classList.remove("error-border");
  }

  if (!beingconsent.checked) {
    errorbeingconsent.textContent =
      "To submit this form, please conset to being contacted.";
    errorbeingconsent.style.display = "block";
  } else {
    errorbeingconsent.style.display = "none";
  }

  if (message.value.trim() === "") {
    errorMessage.textContent = "Please enter your message.";
    errorMessage.style.display = "block";
    message.classList.add("error-border");
  }
});
