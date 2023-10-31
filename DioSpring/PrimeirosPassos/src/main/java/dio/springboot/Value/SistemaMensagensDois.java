package dio.springboot.Value;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SistemaMensagensDois implements CommandLineRunner {
    @Value("${nome: Default}")
    private String nome;
    @Value("${email: Default}")
    private String email;
    @Value("${telefones: 000000000}")
    private List<Long> telefones;
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Mensagem enviada por: "+ nome
        +"E-mail: "+email+ "Com telefones para contato: "+telefones);
        System.out.println("Seu cadastro foi aprovado!");

    }
}
