package exercicios.aulas;

import exercicios.base.Aula;
import exercicios.model.Estudante;
import org.jetbrains.annotations.Nullable;

import java.util.NoSuchElementException;
import java.util.OptionalDouble;

public class Aula7 extends Aula {

    public Aula7() {
 /*       OptionalDouble maxNotaestudantesOpitiona = estudantes.stream()
                .filter(e -> e.getSexo() == 'M' )
                .mapToDouble(Estudante::getNota)
                .max();
//        double maiorNota = maxNotaestudantesOpitiona.orElse(0);
//        double maiorNota = maxNotaestudantesOpitiona.orElseGet(Aula7::getNotaAleatoria);
        double maiorNota = maxNotaestudantesOpitiona.orElseThrow(
                () -> new NoSuchElementException("Não foi encontrado nenhum Estudante")
        );

        System.out.println(maiorNota);*/

        estudantes.stream()
                .filter(e -> e.getSexo() == 'M' )
                .mapToDouble(Estudante::getNota)
                .max()
                .ifPresentOrElse(System.out::println,
                        () -> System.out.println("Não foi encontrado nenhum Estudante"));
    }

    private void imprimenota(@Nullable Estudante estudante) {
        if (estudante == null) {
            System.out.println("Estudante não encontrado");
            return;
        }
        System.out.println(estudante.getNota());
    }

    public static void main(String[] args) {
        new Aula7().start();
    }

    private static double getNotaAleatoria() {
        var x = Math.random();
        var z = Math.random();
        return x + z;
    }

    @Override
    public void start() {
    }
}
