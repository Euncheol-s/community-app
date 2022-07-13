package com.example.RaOn_Community.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //@Controller+@ResponseBody
public class HelloWorldController {
    @GetMapping("/api/hello")
    public String helloWorld(){
        return "Hello, World";
    }
}
