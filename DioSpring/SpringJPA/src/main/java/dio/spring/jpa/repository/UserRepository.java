package dio.spring.jpa.repository;

import dio.spring.jpa.model.User;
import org.hibernate.annotations.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.security.spec.NamedParameterSpec;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("select u from User u where u.name LIKE %:name%")
    List<User> filtrarNome(@Param("name") String name);


    User findByUserName(String userName);

    List<User> findByNameContaining(String name);

}
