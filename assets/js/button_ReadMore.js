
document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", function () {
    const cardOn = this.closest(".text-show");
    const cardOff = this.closest(".text-less");
    
    if (cardOff.style.display === 'block'){
      cardOn.style.display = 'block';
      cardOff.style.display =
    }
  });
});