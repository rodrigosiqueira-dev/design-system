/**
 * Alert Component
 */

export function initAlerts() {
  const closeButtons = document.querySelectorAll("[data-alert-close]");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const alert = button.closest(".alert");
      if (alert) {
        alert.dataset.state = "closed";
        
        // Wait for animation then remove
        alert.addEventListener("transitionend", () => {
          alert.remove();
        }, { once: true });
      }
    });
  });
}
