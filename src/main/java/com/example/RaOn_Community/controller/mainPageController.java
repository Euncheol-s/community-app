package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
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
//        model.addAttribute("PostList", postEntity);
//        Date now=new Date();
//        SimpleDateFormat sdf=new SimpleDateFormat("yyyy년 MM월 dd일 hh시 mm분 ss초");
//        String date=sdf.format(now);
//        java.sql.Date date1=java.sql.Date.valueOf(date);
//        Post pp=new Post(1, "안녕하세요.", "반갑습니다.", "홍길동", date1, 0);
//        model.addAttribute("PostList", pp);
        return postEntity;
    }
    @PostMapping("/board/insert")
    public void softwarePost(PostForm pf) {
        Post post = pf.toEntity();
        Post tmp = pr.save(post);
    }
}
