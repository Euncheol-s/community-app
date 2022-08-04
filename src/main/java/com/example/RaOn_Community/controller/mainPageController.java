package com.example.RaOn_Community.controller;

import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.dto.UserForm;
import com.example.RaOn_Community.entity.*;
import com.example.RaOn_Community.repository.*;
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
    @Autowired
    private FreePostRepository fr;
    @Autowired
    private InformationRepository ir;
    @Autowired
    private MarketRepository mr;
    @Autowired
    private UserRepository ur;
    private Integer num;
    @GetMapping("/api/board")
    public List<Post> noticeBoard(){
        List<Post> postEntity=pr.findAll();
        if(postEntity!=null)
            num = postEntity.get(postEntity.size() - 1).getId();
        return postEntity;
    }
    @GetMapping("/api/board/{id}")
    public Post noticeBoardId(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
        return post;
    }
    @GetMapping("/api/board/{id}/edit")
    public void noticeBoardEdit(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
    }
    @GetMapping("/api/board/{id}/delete")
    public void noticeBoardDelete(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
        if(post!=null){
            pr.delete(post);
        }
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
    @GetMapping("/api/freeboard")
    public List<FreePost> freeBoard(){
        List<FreePost> free=fr.findAll();
        return free;
    }
    @GetMapping("/api/information")
    public List<InformationPost> infromationBoard(){
        List<InformationPost> inform=ir.findAll();
        return inform;
    }
    @GetMapping("/api/market")
    public List<Market> marketBoard(){
        List<Market> market=mr.findAll();
        return market;
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
