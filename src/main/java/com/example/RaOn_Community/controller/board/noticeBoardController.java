package com.example.RaOn_Community.controller.board;

import com.example.RaOn_Community.dto.CommentForm;
import com.example.RaOn_Community.dto.PostForm;
import com.example.RaOn_Community.domain.entity.Comment;
import com.example.RaOn_Community.domain.entity.Post;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.domain.repository.CommentRepository;
import com.example.RaOn_Community.domain.repository.PostRepository;
import com.example.RaOn_Community.domain.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/api/board")
@Slf4j
public class noticeBoardController {
    private Integer num_postId=0;
    private Integer num_commentId=0;
    @Autowired
    private PostRepository pr;
    @Autowired
    private CommentRepository cr;
    @Autowired
    private UserRepository ur;
    @GetMapping("")
    public List<Post> noticeBoard(){
        List<Post> postEntity=pr.findAll();
        if(postEntity.size()>0)
            num_postId=postEntity.get(postEntity.size()-1).getId();
        else
            num_postId=0;
        return postEntity;
    }
    @GetMapping("/{id}")
    public Post noticeBoardId(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
        return post;
    }
    @GetMapping("/{id}/edit")
    public void noticeBoardEdit(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
    }
    @GetMapping("/{id}/delete")
    public void noticeBoardDelete(@PathVariable Integer id){
        Post post=pr.findById(id).orElse(null);
        if(post!=null){
            pr.delete(post);
        }
    }
    @PostMapping("/insert")
    public void softwarePost(PostForm post) {
        post.setId(num_postId+1);
        post.setAuthor("관리자");
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date1=new java.sql.Date(time);
        post.setBoard_date(date1);
        post.setRecommend(0);
        pr.save(post.toEntity());
    }
    @GetMapping("/comment")
    public List<Comment> boardAllComment(){
        List<Comment> commentEntity=cr.findAll();
        return commentEntity;
    }
    @GetMapping("/{id}/comment")
    public List<Comment> boardComments(@PathVariable Integer id){
        List<Comment> commentEntity=cr.findAll();
        Post post=pr.findById(id).orElse(null);
        List<Comment> resultcomment=new ArrayList<Comment>();
        for(Comment com:commentEntity){
            if(post.getId()==com.getPost_id().getId())
                resultcomment.add(com);
        }
        return resultcomment;
    }
    @PostMapping("/{id}/comment/insert")
    public void boardCommentinsert(CommentForm comment, @PathVariable Integer id){
        List<Comment> commentEntity=cr.findAll();
        if(commentEntity.size()>0)
            num_commentId = commentEntity.get(commentEntity.size() - 1).getId();
        else
            num_commentId=0;
        comment.setId(num_commentId+1);
        User user=ur.findById(1).orElse(null);
        comment.setNick(user);
        Date now=new Date();
        long time=now.getTime();
        java.sql.Date date=new java.sql.Date(time);
        comment.setDate(date);
        Post post=pr.findById(id).orElse(null);
        comment.setPost_id(post);
        log.info(comment.toString());
        cr.save(comment.toEntity());
    }
    @GetMapping("/comment/{id}")
    public Comment boardComment(@PathVariable Integer id){
        Comment comment=cr.findById(id).orElse(null);
        return comment;
    }
    @GetMapping("/comment/{id}/delete")
    public void boardCommentDelete(@PathVariable Integer id){
        Comment comment=cr.findById(id).orElse(null);
        if(comment!=null)
            cr.delete(comment);
    }
}
