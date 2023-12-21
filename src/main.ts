import "./style.css";

// email form
const form = document.querySelector("form#email") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});
