// Bisa dipakai buat interaktif nanti
console.log("Portfolio Website Loaded!");

const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // ubah teks tombol sesuai mode
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Mode Terang";
    } else {
      toggleBtn.textContent = "🌙 Mode Gelap";
    }
  });
}