import java.util.List;

public class Portfolio {
    public static void main(String[] args) {
        String nome = "Waldiney Joaci da Silva Barros";
        List<String> projetos = List.of(
            "Sistema de Gestão de Amostras",
            "Dashboard de Dados",
            "Sistema Web com Django + HTMX"
        );

        System.out.println("Portfólio de " + nome);
        for (String projeto : projetos) {
            System.out.println("- " + projeto);
        }
    }
}