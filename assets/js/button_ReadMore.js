
document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    card.classList.toggle("show-more");
    
    this.textContent = card.classList.contains("show-more")
      ? "Read Less"
      : "Read More";
  });
});