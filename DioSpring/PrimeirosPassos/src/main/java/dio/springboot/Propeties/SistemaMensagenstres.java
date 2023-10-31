package dio.springboot.Propeties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SistemaMensagenstres implements CommandLineRunner {
    @Autowired
    private RemetenteDois remetenteDois;
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Mensagem enviada por: "+ remetenteDois.getNome()
        +"E-mail: "+remetenteDois.getEmail()+ "Com telefones para contato: "+remetenteDois.getTelefones());
        System.out.println("Seu cadastro foi aprovado!");

    }
}
