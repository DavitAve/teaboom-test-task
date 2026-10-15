"use strict";

const variants = {
  "100": { sku: "01306", price: "326,40", oldPrice: "349,20" },
  "500": { sku: "01307", price: "1\u00a0432", oldPrice: "1\u00a0646" },
  "1000": { sku: "01308", price: "2\u00a0064", oldPrice: "2\u00a0592" },
  "5000": { sku: "01309", price: "6\u00a0320", oldPrice: "8\u00a0710" }
};

const packaging = document.querySelector(".packaging");
const sku = document.querySelector("#product-sku");
const price = document.querySelector("#product-price");
const oldPrice = document.querySelector("#product-old-price");

function updateVariant(value) {
  const variant = variants[value];
  sku.textContent = variant.sku;
  price.textContent = `${variant.price}\u00a0₽`;
  oldPrice.textContent = `${variant.oldPrice}\u00a0₽`;
}

packaging.addEventListener("change", (event) => {
  if (event.target.matches('input[name="packaging"]')) {
    updateVariant(event.target.value);
  }
});

updateVariant(packaging.querySelector("input:checked").value);
