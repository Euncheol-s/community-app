package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.FreePostForm;
import com.example.RaOn_Community.entity.FreePost;
import com.example.RaOn_Community.repository.FreePostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/freeboard")
public class freeBoardController {
    @Autowired
    private FreePostRepository fr;
    @GetMapping("")
    public List<FreePost> freeBoard(){
        List<FreePost> free=fr.findAll();
        return free;
    }
    @PostMapping("/insert")
    public void freeBoardPost(FreePostForm free){
        free.setAuthor("홍길동");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        free.setBoard_date(date1);
        free.setRecommend(0);
        fr.save(free.toEntity());
    }
}
