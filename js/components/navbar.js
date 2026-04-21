export function initNavbar() {
  const navbars = document.querySelectorAll("[data-navbar]");

  navbars.forEach((navbar) => {
    const trigger = navbar.querySelector("[data-navbar-trigger]");
    const menu = navbar.querySelector("[data-navbar-menu]");

    if (!trigger || !menu) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      
      if (isOpen) {
        trigger.setAttribute("aria-expanded", "false");
        trigger.dataset.state = "closed";
        menu.dataset.state = "closed";
      } else {
        trigger.setAttribute("aria-expanded", "true");
        trigger.dataset.state = "open";
        menu.dataset.state = "open";
      }
    });

    // Fechar ao clicar fora, opcional. Geralmente na navbar não precisa
    // a menos que o menu sobreponha o conteúdo (ex: dropdown longo).
  });
}
