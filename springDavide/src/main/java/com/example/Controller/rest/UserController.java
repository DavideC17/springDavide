package com.example.Controller.rest;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Entity.User;
import com.example.Service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/readAll")
    public List<User> readAll() {
        return userService.readAll();
    }

    @GetMapping("/readUser/{id}")
    public Optional<User> readUser(@PathVariable Long id) {
        return userService.readUser(id);
    }

    @PostMapping("/update/{id}")
    public void update(@RequestBody User u,@PathVariable Long id) {
        userService.update(u, id);
    }

    @PutMapping("/add")
    public void add(@RequestBody User u) {
        userService.add(u);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }
    
}
