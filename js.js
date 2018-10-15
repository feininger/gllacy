var feedback = document.querySelector(".feedback-form");
var feedbackButton = document.querySelector(".feedback-btn");
var feedbackClose = document.querySelector(".feedback-close");
var overlay = document.querySelector(".popup-overlay");

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("show");
    overlay.classList.add("show");
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("show");
    overlay.classList.remove("show");
});