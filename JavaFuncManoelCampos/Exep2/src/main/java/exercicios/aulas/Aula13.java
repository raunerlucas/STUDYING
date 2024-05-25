package exercicios.aulas;

import exercicios.base.Sensor;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;

public class Aula13 {

    void main(String[] args) {
        System.out.println("\nExemplo 1");
        IntStream.range(0, 10)
                .forEach(System.out::println);

        System.out.println("\nExemplo 2");
        IntStream.range(0, 10)
                .map(i -> i * 2)
                .forEach(System.out::println);

        System.out.println("\nExemplo 3");
        int[] arrayPar = IntStream.range(0, 10)
                .map(i -> i * 2)
                .toArray();
        List<Integer> listPar = IntStream.range(0, 10)
                .mapToObj(i -> i * 2)
                .toList();
        System.out.println(STR."Array de pares: \{Arrays.toString(arrayPar)}");
        System.out.println(STR."List de pares: \{listPar}");


        System.out.println("\nExemplo 4");
        var listSensores = IntStream.rangeClosed(1, 10)
                .mapToObj(i -> new Sensor(i, i * 2))
                .toList();
        listSensores.forEach(System.out::println);

        System.out.println("\nExemplo 5");
        var listSensores2 = IntStream.iterate(0, i -> i <= 15, i -> i + 1)
//        var listSensores2 = IntStream.iterate(0,i -> i + 1)
//                .limit(15)
                .mapToObj(i -> new Sensor(i, i * 2))
                .toList();
        listSensores2.forEach(System.out::println);

        System.out.println("\nExemplo 6");
//        new Random().ints().takeWhile(i -> i < 20).forEach(System.out::println);
        new Random().ints().limit(10)
                .map(Math::abs)
                .forEach(System.out::println);


    }
}
