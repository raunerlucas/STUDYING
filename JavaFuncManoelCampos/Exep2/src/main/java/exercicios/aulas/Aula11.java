package exercicios.aulas;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Aula11 {

    private final Map<String, List<String>> estadosCidades =
            Map.of("MG", List.of("Belo Horisonte", "Contagem", "Betim"),
                    "SP", List.of("São Paulo", "Campinas", "Santos"),
                    "RJ", List.of("Rio de Janeiro", "Niterói", "Cabo Frio"));

    public Aula11() {
        var listCidades = estadosCidades.values()
                .stream()
                .flatMap(c -> Stream.of(c.size()))
                .toList();
        listCidades.forEach(System.out::println);

        var listCidades2 = estadosCidades.entrySet()
                .stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey, e -> e.getValue().size()
                ));

        listCidades2.forEach((k, v) -> System.out.println(k + " - " + v));
    }

    public static void main(String[] args) {
        new Aula11();
    }
}
