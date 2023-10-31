package dio.web.api.controller;

import dio.web.api.repository.UserRepository;
import dio.web.api.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping()
    public List<Usuario> getUsers() {
        return repository.findAll();
    }

    @GetMapping(value = "/{name}")
    public Usuario getUser(@PathVariable("name") String name){
        return repository.findByUsername(name);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        repository.deleteById(id);
    }

    @PostMapping()
    public void postUser(@RequestBody Usuario u){
        repository.save(u);
    }
}
