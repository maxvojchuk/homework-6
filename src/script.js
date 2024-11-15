import { saveFormData } from "./saveform.js";
const form = document.querySelector("#fedback");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };
  saveFormData(formData);
  form.reset();
  alert("Данні прийняті");
});
