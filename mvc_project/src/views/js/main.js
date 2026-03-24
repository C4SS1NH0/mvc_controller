import navigationController from "../../controllers/NavigationController.js";

const buttons = document.querySelectorAll("[data-action]");
const feedback = document.getElementById("feedback-message");

function showFeedback(message) {
  feedback.textContent = message;
  feedback.style.display = "block";

  document.body.style.backgroundColor = "#ecfdf5";

  setTimeout(() => {
    feedback.style.display = "none";
    document.body.style.backgroundColor = "";
  }, 2000);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const response = navigationController.handleAction(action);
    showFeedback(response);
  });
});
