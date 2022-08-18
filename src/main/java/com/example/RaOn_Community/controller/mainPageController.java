package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.UserForm;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.domain.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = "localhost:3000",
//    allowedHeaders = {"POST", "GET", "PATCH"})
@Slf4j
public class mainPageController {
    @Autowired
    private UserRepository ur;
    private Integer num;
    @GetMapping("/api/sign")
    public List<User> userList(){
        List<User> user=ur.findAll();
        return user;
    }
    @GetMapping("/api/sign/{id}")
    public User login(@PathVariable Integer id){
        User user=ur.findById(id).orElse(null);
        return user;
    }
    @PostMapping("/api/signIn")
    public void signIn(UserForm user){
        ur.save(user.toEntity());
    }
}
