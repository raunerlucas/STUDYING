package dio.springboot.PPassos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyApp implements CommandLineRunner {
    @Autowired // Funciona um o new...
    private Calculadora calc;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("O resulado é: "+calc.somar(2,2));
    }
}
