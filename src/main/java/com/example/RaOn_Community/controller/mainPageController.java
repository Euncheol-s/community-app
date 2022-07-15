package com.example.RaOn_Community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainPageController {
    @GetMapping("/api/main")
    public String index(){
        return "main";
    }
}
