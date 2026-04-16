const botaoResumo = document.getElementById("btn-resumo");
const campoResumo = document.getElementById("resumo");

if (botaoResumo && campoResumo) {
  botaoResumo.addEventListener("click", () => {
    campoResumo.textContent =
      "Atuação atual no Instituto Evandro Chagas com SIGA, integração de APIs REST e pipelines de dados usando Python, Django, SQL, Pandas e R.";
  });
}