package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
//@CrossOrigin(origins = "localhost:3000",
//    allowedHeaders = {"POST", "GET", "PATCH"})
@Slf4j
public class mainPageController {
    @Autowired
    private PostRepository pr;
    private Integer num;
    @GetMapping("/api/board")
    public List<Post> noticeSoftwareBoard(){
        List<Post> postEntity=pr.findAll();
        if(postEntity!=null)
            num = postEntity.get(postEntity.size() - 1).getId();
        return postEntity;
    }
    @GetMapping("/api/board/{id}")
    public Post noticeSoftwareBoardId(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
        return post;
    }
    @PostMapping("/api/board/insert")
    public void softwarePost(PostForm post) {
        post.setId(num+1);
        post.setAuthor("관리자");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        post.setBoard_date(date1);
        post.setRecommend(0);
        pr.save(post.toEntity());
    }
}
