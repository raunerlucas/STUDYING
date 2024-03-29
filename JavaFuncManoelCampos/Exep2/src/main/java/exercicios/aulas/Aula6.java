package exercicios.aulas;

import exercicios.base.Aula;
import exercicios.model.Curso;
import exercicios.model.Estudante;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Comparator.comparing;

public class Aula6 extends Aula {


    public Aula6() {
        /*
//        Predicate<Estudante> filtro = Predicate.not(Estudante::hasCurso);
        // pode ser feito assim também:
        // var filtro = ((Predicate<Estudante>) Estudante::hasCurso).negate();
        var filtro = ((Predicate<Estudante>) Estudante::hasCurso)
                .and(Estudante::isAprovado);

        System.out.println("\nEstudantes por nota");
        // não altera diretamente o objeto estudantes
        estudantes.stream()
                .filter(filtro)
                .sorted(Comparator.comparingDouble(Estudante::getNota))
                .forEach(System.out::println);

        //  imprimir novamente persebendo que a lista não foi alterada
        System.out.println("\nEstudantes originais");
        estudantes.forEach(System.out::println);


        // dupla ordenação
        System.out.println("\nEstudantes por Curso e Nota");


        var comparator = comparing(Estudante::getCurso)
                .thenComparingDouble(Estudante::getNota);

        Comparator<Estudante> Notascomparator = comparing(Estudante::getCurso)
                .thenComparing(comparing(Estudante::getNota).reversed());

        estudantes.stream()
                .filter(filtro)
                .sorted(comparator)
                .forEach(System.out::println);
*/
        // Esse não é mutavel
        List<Estudante> estudanteMat = estudantes.stream().filter(Estudante::hasCurso).toList();
        // Esse é mutavel
        var estudantesMatMutavel = estudantes.stream()
                .filter(Estudante::hasCurso)
                .map(Estudante::getNome)
                .collect(Collectors.joining(", "));

//        System.out.println(estudantesMatMutavel);

        var estudanteMCurso = estudantes.stream()
                .filter(Estudante::hasCurso)
                .collect(Collectors.groupingBy(Estudante::getCurso,
                        Collectors.averagingDouble(Estudante::getNota)));

//        estudanteMCurso.forEach(Aula6::imprimeEstudantesPorCurso);
        estudanteMCurso.forEach((curso, media)
                -> System.out.printf("\nCurso: %s Média: %.2f\n", curso.getNome(), media));

    }


    public static void main(String[] args) {
        Aula aula = new Aula6();
        aula.start();
    }

    private static void imprimeEstudantesPorCurso(Curso curso, List<Estudante> estudantes) {
        System.out.println("\nCurso: " + curso.getNome());
        estudantes.forEach(estudante -> System.out.printf("\t%s\n", estudante.getNome()));
    }

    @Override
    public void start() {
    }
}
