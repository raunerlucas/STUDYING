package exercicios.aulas;

import exercicios.base.Aula;
import exercicios.model.Cidade;
import exercicios.model.Estudante;

public class Aula5 extends Aula {

    public Aula5() {
        super(10);
        double notasAluno = estudantes.stream()
                .filter(Estudante::isHomem)
                .filter(Estudante::hasNota)
                .mapToDouble(Estudante::getNota)
                .map(n -> n * 100)
                .min()
                .orElse(0);


        long totalEstados = estudantes.stream()
                .map(Estudante::getCidade)
                .map(Cidade::getEstado)
                .distinct() // Distigue os estadosdiferentes
                .count();// Conta a quantidade de estados diferentes

        System.out.println("Total de estados: " + totalEstados);
    }

    @Override
    public void start() {
        new Aula5();
    }

    public static void main(String[] args) {
        new Aula5();
    }
}
