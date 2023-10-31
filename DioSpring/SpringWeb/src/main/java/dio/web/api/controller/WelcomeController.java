package dio.web.api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class WelcomeController {

    @GetMapping("/*")
    public String welcome(){
        return "Welcome to my Spring Boot web API";
    }
}
