package com.example.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.User;
import com.example.Repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    //ReadAll
    public List<User> readAll() {
        return userRepository.findAll();
    }
    
    //ReadUser
    public Optional<User> readUser(Long id) {
        Optional<User> u = userRepository.findById(id);
        return u;
    }

    //Update
    public void update(User u, Long id) {
        if(userRepository.existsById(id)) {
            u.setId(id);
            userRepository.save(u);
        }
    }

    //Add
    public void add(User u) {
        userRepository.save(u);
    }


    //Delete
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
