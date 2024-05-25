package exercicios.aulas;

import exercicios.base.Aula;
import exercicios.model.Estudante;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Stream;

public class Aula10 extends Aula {

    public Aula10() {

        double maiorNotaHomens = maiorNotaIs(getEstudanteStream(), Estudante::isHomem);
        System.out.println("Maior nota dos homens: " + maiorNotaHomens);

        double maiorNotaMulheres = maiorNotaIs(getEstudanteStream(), e -> !e.isHomem());
        System.out.println("Maior nota das mulheres: " + maiorNotaMulheres);

        List<Double> notas = getEstudanteStream()
                .map(Estudante::getNota)
                .toList();
        System.out.println("Notas dos aprovados: " + notas);
    }

    private @NotNull Stream<Estudante> getEstudanteStream() {
        return estudantes.stream()
                .filter(Estudante::isAprovado);
    }

    private double maiorNotaIs(Stream<Estudante> estudanteStream, Predicate<Estudante> filtro) {
        return estudanteStream
                .filter(filtro)
                .mapToDouble(Estudante::getNota)
                .max()
                .orElse(0);
    }

    public static void main(String[] args) {
        new Aula10();
    }

    @Override
    public void start() {
    }
}
