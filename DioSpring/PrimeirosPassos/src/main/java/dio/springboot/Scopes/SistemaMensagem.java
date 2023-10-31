package dio.springboot.Scopes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SistemaMensagem {
    @Autowired
    private Remetente noreply;
    @Autowired
    private Remetente techTeam;

    public void enviarConfCadastro(){
        System.out.println(noreply);
        System.out.println("Cadastrado com Sucesso");
    }
    public void enviarMsgWelcome(){
        techTeam.setEmail("tec@dio.com.br");
        System.out.println(techTeam);
        System.out.println("Bem-Vindo: Tech Team");
    }
}
