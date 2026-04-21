function closeDropdown(container) {
  const trigger = container.querySelector("[data-dropdown-trigger]");
  const menu = container.querySelector("[data-dropdown-menu]");

  if (!trigger || !menu) return;

  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
  trigger.dataset.state = "closed";
}

function openDropdown(container) {
  const trigger = container.querySelector("[data-dropdown-trigger]");
  const menu = container.querySelector("[data-dropdown-menu]");
  const firstItem = menu?.querySelector('[role="menuitem"]');

  if (!trigger || !menu) return;

  menu.hidden = false;
  trigger.setAttribute("aria-expanded", "true");
  trigger.dataset.state = "open";
  firstItem?.focus();
}

export function initDropdowns() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  dropdowns.forEach((container) => {
    const trigger = container.querySelector("[data-dropdown-trigger]");
    const menu = container.querySelector("[data-dropdown-menu]");

    if (!trigger || !menu) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      dropdowns.forEach((dropdown) => {
        if (dropdown !== container) closeDropdown(dropdown);
      });

      if (isOpen) {
        closeDropdown(container);
        return;
      }

      openDropdown(container);
    });

    container.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeDropdown(container);
        trigger.focus();
      }
    });
  });

  document.addEventListener("click", (event) => {
    dropdowns.forEach((container) => {
      if (!container.contains(event.target)) {
        closeDropdown(container);
      }
    });
  });
}
