package exercicios.aulas;

import exercicios.base.Aula;
import exercicios.model.Estudante;

import java.util.HashMap;
import java.util.Map;

import static java.util.stream.Collectors.toMap;

public class Aula8 extends Aula {

    public Aula8() {
        var estudante1 = estudantes.get(0);
        Estudante estudante = estudantes.stream()
                .reduce(estudante1, (e1, e2) -> e1.compareTo(e2) > 0 ? e1 : e2);
//                .orElseThrow(() -> new NoSuchElementException("Não encontramos estudantes"));
//        System.out.println(estudante);

//        estudantes.stream().sorted().forEach(System.out::println);

        var mapPessComanda = new HashMap<>(
                Map.of(
                        "João", 1.75,
                        "Maria", 2.0,
                        "José", 1.5,
                        "Ana", 1.8,
                        "Pedro", 1.9,
                        "Paulo", 1.7,
                        "Lucas", 1.6,
                        "Carlos", 1.65
                ));
//        mapPessComanda.merge("João", 10.0, Double::sum);
//        mapPessComanda.merge("João", .25, Double::sum);
//        mapPessComanda.forEach((key, value) -> {
//            double v = value >= 10 ? value * 0.5 : value;
//            System.out.println(key + " -- " + v);
//        });
//        System.out.println();
//        mapPessComanda.forEach((chave, valor) -> System.out.println(chave + " -> " + valor));


        Map<String, Double> mapaEstNomeNota = estudantes.stream().collect(
                toMap(Estudante::getNome, Estudante::getNota)
        );
        mapaEstNomeNota.forEach((chave, valor) -> System.out.println(chave + " -> " + valor));
    }

    private static double getValue() {
        return 3.0;
    }

    @Override
    public void start() {
    }

    public static void main(String[] args) {
        new Aula8();
    }
}
