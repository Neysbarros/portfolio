# Script R para resumir dados de projetos do portfólio
projetos <- c("Gestão de Amostras", "Dashboard de Dados", "Sistema Django + HTMX")
horas_estimadas <- c(120, 90, 150)

dados <- data.frame(projeto = projetos, horas = horas_estimadas)
print(dados)
cat("\nTotal de horas estimadas:", sum(dados$horas), "\n")
cat("Média de horas por projeto:", mean(dados$horas), "\n")