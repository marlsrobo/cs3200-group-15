package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserOrmDao {
    @Autowired
    UserRestRepository userRepository;

    @GetMapping("/orm/create/user/{fn}/{ln}/{un}/{pw}")
    public User createUser(
            @PathVariable("fn") String first,
            @PathVariable("ln") String last,
            @PathVariable("un") String uname,
            @PathVariable("pw") String pass) {
        User user = new User(first, last, uname, pass, null);
        return userRepository.save(user);
    }

    @GetMapping("orm/find/users")
    public List<User> findAllUser() {
        return userRepository.findAllUsers();
    }

    @GetMapping("/orm/find/user/{userId}")
    public User findUserById(@PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }

    @GetMapping("/orm/delete/user/{userId}")
    public void deleteUser(@PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/orm/update/user/{userId}/{password}")
    public User updateUser(@PathVariable("userId") Integer id,
                           @PathVariable("password") String newPass) {
        User user = userRepository.findUserById(id);
        user.setPassword(newPass);
        return userRepository.save(user);
    }
}
