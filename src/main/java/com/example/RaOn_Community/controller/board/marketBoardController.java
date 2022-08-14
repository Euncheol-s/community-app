package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.MarketCommentForm;
import com.example.RaOn_Community.dto.MarketForm;
import com.example.RaOn_Community.entity.*;
import com.example.RaOn_Community.repository.MarketCommentRepository;
import com.example.RaOn_Community.repository.MarketRepository;
import com.example.RaOn_Community.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/api/market")
public class marketBoardController {
    private Integer num_Id=0;
    private Integer commentNum_Id=0;
    @Autowired
    private MarketRepository mr;
    @Autowired
    private MarketCommentRepository mcr;
    @Autowired
    private UserRepository ur;
    @GetMapping("")
    public List<Market> marketBoard(){
        List<Market> market=mr.findAll();
        if(market.size()>0)
            num_Id=market.get(market.size()-1).getId();
        else
            commentNum_Id=0;
        return market;
    }
    @GetMapping("/{id}")
    public Market marketBoardId(@PathVariable Integer id){
        Market marketPost=mr.findById(id).orElse(null);
        return marketPost;
    }
    @GetMapping("/{id}/delete")
    public void marketBoardDelete(@PathVariable Integer id){
        Market marketPost=mr.findById(id).orElse(null);
        if(marketPost!=null)
            mr.delete(marketPost);
    }
    @PostMapping("/insert")
    public void marketBoardPost(MarketForm market){
        market.setId(num_Id+1);
        market.setAuthor("홍길동");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        market.setBoard_date(date1);
        market.setRecommend(0);
        mr.save(market.toEntity());
    }
    @GetMapping("/marketcomment")
    public List<MarketComment> marketAllComments(){
        List<MarketComment> commentEntity=mcr.findAll();
        return commentEntity;
    }
    @GetMapping("/{id}/marketcomment")
    public List<MarketComment> marketAllComment(@PathVariable Integer id){
        Market market=mr.findById(id).orElse(null);
        List<MarketComment> commentList=mcr.findAll();
        List<MarketComment> result=new ArrayList<MarketComment>();
        for(MarketComment mc:commentList){
            if(mc.getMarket_id().getId()==market.getId())
                result.add(mc);
        }
        return result;
    }
    @PostMapping("/{id}/marketcomment/insert")
    public void marketCommentinsert(MarketCommentForm comment, @PathVariable Integer id){
        List<MarketComment> commentEntity=mcr.findAll();
        if(commentEntity.size()>0)
            commentNum_Id = commentEntity.get(commentEntity.size() - 1).getId();
        else
            commentNum_Id=0;
        comment.setId(commentNum_Id+1);
        User user=ur.findById(1).orElse(null);
        comment.setNick(user);
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date=new java.sql.Date(time);
        comment.setDate(date);
        Market post=mr.findById(id).orElse(null);
        comment.setMarket_id(post);
        mcr.save(comment.toEntity());
    }
    @GetMapping("/marketcomment/{id}")
    public MarketComment marketComment(@PathVariable Integer id){
        MarketComment comment=mcr.findById(id).orElse(null);
        return comment;
    }
    //id번 댓글 한 개 조회
    @GetMapping("/marketcomment/{id}/delete")
    public void marketCommentDelete(@PathVariable Integer id){
        MarketComment comment=mcr.findById(id).orElse(null);
        if(comment!=null)
            mcr.delete(comment);
    }
}
