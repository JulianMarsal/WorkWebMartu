/* ============================================================
   Maquillaje Social & de Salón — JS
   Esqueleto base. El diseño/lógica lo completa otra sesión/programador.
   ============================================================ */

// Año dinámico en el footer
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
