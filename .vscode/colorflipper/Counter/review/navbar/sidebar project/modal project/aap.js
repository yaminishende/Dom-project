document.addEventListener("DOMContentLoaded", function() {
  const modalBtn = document.querySelector(".modal-btn");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-btn");

  if (modalBtn && modal && closeBtn) {
      modalBtn.addEventListener("click", function () {
          modal.classList.add("open-modal");
      });

      closeBtn.addEventListener("click", function () {
          modal.classList.remove("open-modal");
      });
  } else {
      console.error("Modal elements not found in the DOM");
  }
});
