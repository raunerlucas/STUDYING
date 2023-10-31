package dio.spring.jpa;

import dio.spring.jpa.model.User;
import dio.spring.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StartApp implements CommandLineRunner {
    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) throws Exception {
        List<User> users = repository.findByNameContaining("Rauner");
        users.forEach(System.out::println);
    }

    private void insertUser(String nome, String user_Name, String senha){
        User user = new User();
        user.setName(nome);
        user.setUserName(user_Name);
        user.setPassword(senha);

        repository.save(user);

        for (User u : repository.findAll()) {
            System.out.println(u);
        }
    }
}
