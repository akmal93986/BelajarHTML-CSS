// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙 Dark Mode";
  toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 9999;
  `;

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });

  // Sambutan saat pertama buka
  setTimeout(() => {
    alert("Selamat datang di BelajarRPL! Yuk mulai belajar 🔥");
  }, 500);
});