package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.domain.entity.FreeComment;
import com.example.RaOn_Community.domain.entity.FreePost;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.dto.FreeCommentForm;
import com.example.RaOn_Community.dto.FreePostForm;
import com.example.RaOn_Community.domain.repository.FreeCommentRepository;
import com.example.RaOn_Community.domain.repository.FreePostRepository;
import com.example.RaOn_Community.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/freeboard")
public class freeBoardController {
    private Integer num_Id=0;
    private Integer commentNum_Id=0;
    @Autowired
    private FreePostRepository fr;
    @Autowired
    private FreeCommentRepository fcr;
    @Autowired
    private UserRepository ur;
    @GetMapping("")
    public List<FreePost> freeBoard(){
        List<FreePost> free=fr.findAll();
        if(free.size()>0)
            num_Id=free.get(free.size()-1).getId();
        else
            num_Id=0;
        return free;
    }
    @GetMapping("/{id}")
    public FreePost freeBoardId(@PathVariable Integer id){
        FreePost freePost=fr.findById(id).orElse(null);
        return freePost;
    }
    @GetMapping("/{id}/delete")
    public void freeBoardDelete(@PathVariable Integer id){
        FreePost freePost=fr.findById(id).orElse(null);
        if(freePost!=null)
            fr.delete(freePost);
    }
    @PostMapping("/{id}/edit")
    public void freeBoardEdit(@PathVariable Integer id, FreePostForm free){
        free.setAuthor("홍길동");
        free.setRecommend(0);
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date dateTime=new java.sql.Date(time);
        free.setBoard_date(dateTime);
        FreePost post=free.toEntity();
        FreePost target=fr.findById(id).orElse(null);
        if(target!=null){
            Integer targetId=target.getId();
            if(targetId==id)
                fr.save(post);
        }
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
    @GetMapping("/freeboardcomment")
    public List<FreeComment> freeAllComments(){
        List<FreeComment> commentEntity=fcr.findAll();
        return commentEntity;
    }
    //자유게시판의 전체 댓글 조회
    @GetMapping("/{id}/freeboardcomment")
    public List<FreeComment> freeAllComment(@PathVariable Integer id){
        FreePost free=fr.findById(id).orElse(null);
        List<FreeComment> commentList=fcr.findAll();
        List<FreeComment> result=new ArrayList<FreeComment>();
        for(FreeComment fc:commentList){
            if(fc.getFree_id().getId()==free.getId())
                result.add(fc);
        }
        return result;
    }
    //자유게시판의 id번째 게시글의 댓글 조회
    @PostMapping("/{id}/freeboardcomment/insert")
    public void freeCommentinsert(FreeCommentForm comment, @PathVariable Integer id){
        List<FreeComment> commentEntity=fcr.findAll();
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
        FreePost post=fr.findById(id).orElse(null);
        comment.setFree_id(post);
        fcr.save(comment.toEntity());
    }
    @GetMapping("/freeboardcomment/{id}")
    public FreeComment freeComment(@PathVariable Integer id){
        FreeComment comment=fcr.findById(id).orElse(null);
        return comment;
    }
    //id번 댓글 한 개 조회
    @GetMapping("/freeboardcomment/{id}/delete")
    public void freeCommentDelete(@PathVariable Integer id){
        FreeComment comment=fcr.findById(id).orElse(null);
        if(comment!=null)
            fcr.delete(comment);
    }
}