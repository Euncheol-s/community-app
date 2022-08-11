package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.MarketForm;
import com.example.RaOn_Community.entity.Market;
import com.example.RaOn_Community.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/api/market")
public class marketBoardController {
    private Integer num_Id=0;
    @Autowired
    private MarketRepository mr;
    @GetMapping("")
    public List<Market> marketBoard(){
        List<Market> market=mr.findAll();
        if(market.size()>0)
            num_Id=market.get(market.size()-1).getId();
        return market;
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
}
