const BRAND_KEY = "brand";
const DEFAULT_BRAND = "standard";

export function applyBrand(brand) {
  document.documentElement.dataset.brand = brand;
  localStorage.setItem(BRAND_KEY, brand);
}

export function initBrand() {
  const savedBrand = localStorage.getItem(BRAND_KEY) || DEFAULT_BRAND;
  applyBrand(savedBrand);

  document.querySelectorAll("[data-brand-value]").forEach((button) => {
    button.addEventListener("click", () => {
      applyBrand(button.dataset.brandValue);
    });
  });
}
