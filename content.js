function fill(el) {
  const { fill } = el.dataset;
  for (var i = 0; i < fill; i++) {
    const h2 = document.createElement("h2");
    h2.textContent = `Section ${i + 1}`;
    h2.classList.add("text-2xl", "font-bold");
    const p = document.createElement("p");
    p.classList.add("text-xl", "mb-6", "text-gray-500");
    p.textContent =
      "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.";
    el.appendChild(h2);
    el.appendChild(p);
  }
}

document.querySelectorAll("[data-fill]").forEach(fill);
