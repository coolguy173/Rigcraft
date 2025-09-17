document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("build-form");
  const result = document.getElementById("build-result");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const budget = document.getElementById("budget").value;
      const purpose = document.getElementById("purpose").value;

      let build = "⚡ Suggested Build:\n";
      if (budget < 50000) {
        build += "- Ryzen 5 5600G\n- 16GB RAM\n- 512GB SSD\n- GTX 1650";
      } else if (budget < 100000) {
        build += "- Intel i5 13400F\n- 16GB RAM\n- 1TB NVMe\n- RTX 3060 Ti";
      } else {
        build += "- Ryzen 7 7800X3D\n- 32GB RAM\n- 2TB NVMe\n- RTX 4080";
      }

      result.innerHTML = `<pre>${build}</pre>`;
    });
  }
});
