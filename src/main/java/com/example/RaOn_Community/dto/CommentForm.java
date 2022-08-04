package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Setter
public class CommentForm {
    private Integer id;
    private String nickname;
    private String com;
    private Integer recommend;
    private Integer notrecommend;
    public Comment toEntity(){
        return new Comment(id, nickname, com, recommend, notrecommend);
    }
}
