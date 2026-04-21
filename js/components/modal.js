const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}

export function initModals() {
  const modalRoots = document.querySelectorAll("[data-modal-root]");

  modalRoots.forEach((root) => {
    const trigger = root.querySelector("[data-modal-trigger]");
    const backdrop = root.querySelector("[data-modal-backdrop]");
    const panel = root.querySelector("[data-modal-panel]");
    const closeButtons = root.querySelectorAll("[data-modal-close]");

    if (!trigger || !backdrop || !panel) return;

    let previousActiveElement = null;

    const closeModal = () => {
      backdrop.hidden = true;
      document.body.style.overflow = "";
      previousActiveElement?.focus();
    };

    const openModal = () => {
      previousActiveElement = document.activeElement;
      backdrop.hidden = false;
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        const focusable = getFocusableElements(panel);
        (focusable[0] || panel).focus();
      });
    };

    trigger.addEventListener("click", openModal);

    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeModal();
    });

    root.addEventListener("keydown", (event) => {
      if (backdrop.hidden) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(panel);

      if (!focusable.length) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  });
}
