"""Script simples para organizar dados do portfólio em Python."""

portfolio = {
    "nome": "Waldiney Joaci da Silva Barros",
    "stack": ["Python", "Django", "HTMX", "R"],
    "github": "https://github.com/Neysbarros",
}


def resumo(dados: dict) -> str:
    tecnologias = ", ".join(dados["stack"])
    return f"{dados['nome']} trabalha com {tecnologias}."


if __name__ == "__main__":
    print(resumo(portfolio))