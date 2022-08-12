package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.FreePostForm;
import com.example.RaOn_Community.entity.FreePost;
import com.example.RaOn_Community.entity.Post;
import com.example.RaOn_Community.repository.FreePostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/freeboard")
public class freeBoardController {
    private Integer num_Id=0;
    @Autowired
    private FreePostRepository fr;
    @GetMapping("")
    public List<FreePost> freeBoard(){
        List<FreePost> free=fr.findAll();
        if(free.size()>0)
            num_Id=free.get(free.size()-1).getId();
        return free;
    }
    @PostMapping("/insert")
    public void freeBoardPost(FreePostForm free){
        free.setId(num_Id+1);
        free.setAuthor("홍길동");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        free.setBoard_date(date1);
        free.setRecommend(0);
        fr.save(free.toEntity());
    }
    @GetMapping("/{id}")
    public FreePost freeBoardId(@PathVariable Integer id){
        FreePost free=fr.findById(id).orElse(null);
        return free;
    }
    @GetMapping("/{id}/delete")
    public void freeBoardDelete(@PathVariable Integer id){
        FreePost free = fr.findById(id).orElse(null);
        if(free!=null){
            fr.delete(free);
        }
    }
}
