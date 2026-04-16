const botaoResumo = document.getElementById("btn-resumo");
const campoResumo = document.getElementById("resumo");

botaoResumo.addEventListener("click", () => {
  const tecnologias = ["Python", "Java", "JavaScript", "R", "Django", "HTMX"];
  campoResumo.textContent = `Stack principal: ${tecnologias.join(", ")}.`;
});