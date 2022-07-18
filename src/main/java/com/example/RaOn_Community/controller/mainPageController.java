package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class mainPageController {
    @Autowired
    private PostRepository pr;
    @GetMapping("/api/main")
    public String index(){
        return "main";
    }
    @GetMapping("/api/main/major/software/new")
    public String software(Model model){
        List<Post> entityPost=pr.findAll();
        model.addAttribute("PostList", entityPost);
        return "";
    }
    @PostMapping("/api/main/major/software/create")
    public String softwarePost(PostForm pf){
        Post post=pf.toEntity();
        Post tmp=pr.save(post);
        return "redirect:/api/main/major/software/"+tmp.getId();
    }
}
