package com.example.RaOn_Community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainPageController {
    @GetMapping("/api/main")
    public String index(){
        return "main";
    }
    @GetMapping("/api/소프트웨어학부")
    public String soft_Notice(){
        return "";
    }
    @GetMapping("/api/인공지능융합학부")
    public String AI_Notice(){
        return "";
    }
    @GetMapping("/api/데이터사이언스학부")
    public String Data_Notice(){
        return "";
    }
}
