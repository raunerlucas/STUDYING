package com.amigoscode.imperative;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.amigoscode.imperative.Main.Gender.Female;
import static com.amigoscode.imperative.Main.Gender.Male;

public class Main {
    public static void main(String[] args) {
        List<Person> peoples = List.of(
            new Person("John", Male),
            new Person("Maria", Female),
            new Person("Aisha", Female),
            new Person("Alex", Male),
            new Person("Alice", Female)
        );

        System.out.println("\nImperative approach");
        // Imperative approach
        List<Person> females = new ArrayList<>();
        for (Person person: peoples) {
            if (Female.equals(person.gender))
                females.add(person);
        }
        for (Person famale: females) {
            System.out.println(famale);
        }


        System.out.println("\nDeclarative approach");
        //Declarative approach

        List<Person> females2 = peoples.stream()
                .filter(person -> person.gender.equals(Female))
                .toList();
        females2.forEach(System.out::println);
    }

    record Person(String name, Gender gender) {
    }

    enum Gender{
        Male, Female
    }
}
