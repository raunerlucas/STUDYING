package exercicios.aulas;

import java.util.Arrays;
import java.util.function.IntPredicate;

public class Aula12 {

    private final int[][] teatro = new int[10][6];

    public Aula12() {
        defineValoresAssentos();
        imprimeValoresAssentos();
        System.out.println("Quantidade de assentos com valor menor ou igual a R$80 " +
                ":: " + contarAssentosValor(v -> v <= 80));
        System.out.println("Quantidade de assentos com valor maior ou igual a R$100 " +
                ":: " + contarAssentosValor(v -> v >= 10));
    }

    private void imprimeValoresAssentos() {
        for (int[] linha : teatro) {
            for (int vCol : linha) {
                System.out.printf("%5d ",vCol);
            }
            System.out.println();
        }
    }
    private long contarAssentosValor(IntPredicate condicao) {
        return Arrays.stream(teatro)
                .flatMapToInt(Arrays::stream)
                .filter(condicao)
                .count();
    }
    private void defineValoresAssentos() {
        for (int i = 0; i < teatro.length; i++) {
            for (int j = 0; j < teatro[i].length; j++) {
                teatro[i][j] = (int) (50 + Math.random() * 100);
            }
        }
    }

    public static void main(String[] args) {
        new Aula12();
    }
}
