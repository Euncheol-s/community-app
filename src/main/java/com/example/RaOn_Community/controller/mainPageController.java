package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
//@CrossOrigin(origins = "localhost:3000",
//    allowedHeaders = {"POST", "GET", "PATCH"})
@Slf4j
public class mainPageController {
    @Autowired
    private PostRepository pr;
    @GetMapping("/api/board")
    public List<Post> noticeSoftwareBoard(){
        List<Post> postEntity=pr.findAll();
        log.info(postEntity.toString());
        return postEntity;
    }
    @GetMapping("/api/board/insert")
    public void newsoftwarePost(){}
    @PostMapping("/api/board/insert")
    public void softwarePost(PostForm post) {
        log.info(post.toString());
        post.setAuthor("홍길동");
        Date now=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String date=sdf.format(now);
        java.sql.Date date1=java.sql.Date.valueOf(date);
        post.setBoard_date(date1);
        pr.save(post.toEntity());
    }
}
