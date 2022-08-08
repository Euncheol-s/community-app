package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.Comment;
import com.example.RaOn_Community.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
@Setter
public class CommentForm {
    private Integer id;
    private String nickname;
    private String com;
    private Date date;
    private Post post_id;
    public Comment toEntity(){
        return new Comment(id, nickname, com, date, post_id);
    }
}
