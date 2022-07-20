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
@RequestMapping("/api")
public class mainPageController {
    @Autowired
    private PostRepository pr;
    @GetMapping("/board")
    public List<Post> noticeSoftwareBoard(Model model){
        List<Post> postEntity=pr.findAll();
        model.addAttribute("PostList", postEntity);
        return postEntity;
    }
    @PostMapping("/board/create")
    public String softwarePost(PostForm pf) {
        Post post = pf.toEntity();
        Post tmp = pr.save(post);
//        return "redirect:/api/board/"+tmp.getId();
        return "";
    }
}
