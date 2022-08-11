package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.InformationForm;
import com.example.RaOn_Community.entity.InformationPost;
import com.example.RaOn_Community.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/information")
public class informationBoardController {
    @Autowired
    private InformationRepository ir;
    @GetMapping("")
    public List<InformationPost> infromationBoard(){
        List<InformationPost> inform=ir.findAll();
        return inform;
    }
    @PostMapping("/insert")
    public void informationBoardPost(InformationForm inform){
        inform.setAuthor("홍길동");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        inform.setBoard_date(date1);
        inform.setRecommend(0);
        ir.save(inform.toEntity());
    }
}
