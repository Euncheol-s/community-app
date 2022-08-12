package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.InformationForm;
import com.example.RaOn_Community.entity.FreePost;
import com.example.RaOn_Community.entity.InformationPost;
import com.example.RaOn_Community.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/information")
public class informationBoardController {
    private Integer num_Id=0;
    @Autowired
    private InformationRepository ir;
    @GetMapping("")
    public List<InformationPost> infromationBoard(){
        List<InformationPost> inform=ir.findAll();
        if(inform.size()>0)
            num_Id=inform.get(inform.size()-1).getId();
        return inform;
    }
    @PostMapping("/insert")
    public void informationBoardPost(InformationForm inform){
        inform.setId(num_Id+1);
        inform.setAuthor("홍길동");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        inform.setBoard_date(date1);
        inform.setRecommend(0);
        ir.save(inform.toEntity());
    }
    @GetMapping("/{id}")
    public InformationPost informationBoardId(@PathVariable Integer id){
        InformationPost inform=ir.findById(id).orElse(null);
        return inform;
    }
    @GetMapping("/{id}/delete")
    public void informationBoardDelete(@PathVariable Integer id){
        InformationPost inform = ir.findById(id).orElse(null);
        if(inform!=null){
            ir.delete(inform);
        }
    }
}
