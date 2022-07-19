package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "https://localhost:3000")
@RequestMapping("/api/main")
public class mainPageController {
    @Autowired
    private PostRepository pr;
    @GetMapping("/major/board/1/{id}")
    public String freeBoard(@PathVariable Integer id, Model model){
        Post entityPost=pr.findById(id).orElse(null);
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
