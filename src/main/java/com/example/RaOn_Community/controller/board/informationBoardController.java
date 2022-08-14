package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.InformationCommentForm;
import com.example.RaOn_Community.dto.InformationForm;
import com.example.RaOn_Community.entity.InformationComment;
import com.example.RaOn_Community.entity.InformationPost;
import com.example.RaOn_Community.entity.User;
import com.example.RaOn_Community.repository.InformationCommentRepository;
import com.example.RaOn_Community.repository.InformationRepository;
import com.example.RaOn_Community.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/information")
public class informationBoardController {
    private Integer num_Id=0;
    private Integer commentNum_Id=0;
    @Autowired
    private InformationRepository ir;
    @Autowired
    private InformationCommentRepository icr;
    @Autowired
    private UserRepository ur;
    @GetMapping("")
    public List<InformationPost> infromationBoard(){
        List<InformationPost> inform=ir.findAll();
        if(inform.size()>0)
            num_Id=inform.get(inform.size()-1).getId();
        else
            num_Id=0;
        return inform;
    }
    @GetMapping("/{id}")
    public InformationPost informationBoardId(@PathVariable Integer id){
        InformationPost information=ir.findById(id).orElse(null);
        return information;
    }
    @GetMapping("/{id}/delete")
    public void informationBoardDelete(@PathVariable Integer id){
        InformationPost information=ir.findById(id).orElse(null);
        if(information!=null)
            ir.delete(information);
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
    @GetMapping("/informationcomment")
    public List<InformationComment> informationAllComments(){
        List<InformationComment> informationEntity=icr.findAll();
        return informationEntity;
    }
    @GetMapping("/{id}/informationcomment")
    public List<InformationComment> informationAllComment(@PathVariable Integer id){
        List<InformationComment> informationComment=icr.findAll();
        List<InformationComment> result=new ArrayList<InformationComment>();
        InformationPost information=ir.findById(id).orElse(null);
        for(InformationComment ic:informationComment){
            if(ic.getInformation_id().getId()== information.getId())
                result.add(ic);
        }
        return result;
    }
    @PostMapping("/{id}/informationcomment/insert")
    public void informationCommentinsert(InformationCommentForm comment, @PathVariable Integer id){
        List<InformationComment> commentEntity=icr.findAll();
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
        InformationPost information=ir.findById(id).orElse(null);
        comment.setInfromation_id(information);
        icr.save(comment.toEntity());
    }
    @GetMapping("/informationcomment/{id}")
    public InformationComment informationComment(@PathVariable Integer id){
        InformationComment comment=icr.findById(id).orElse(null);
        return comment;
    }
    @GetMapping("/informationcomment/{id}/delete")
    public void informationCommentDelete(@PathVariable Integer id){
        InformationComment comment=icr.findById(id).orElse(null);
        if(comment!=null)
            icr.delete(comment);
    }
}
