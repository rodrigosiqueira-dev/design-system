/**
 * Accordion Component
 */

export function initAccordions() {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      
      // Close other accordion items in the same accordion group if needed
      // (Optional: standard behavior for some accordions)
      /*
      const accordion = trigger.closest(".accordion");
      const allTriggers = accordion.querySelectorAll(".accordion-trigger");
      allTriggers.forEach(t => t.setAttribute("aria-expanded", "false"));
      */

      trigger.setAttribute("aria-expanded", !isExpanded);
    });
  });
}
