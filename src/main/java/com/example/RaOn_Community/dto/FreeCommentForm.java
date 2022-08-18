package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.FreeComment;
import com.example.RaOn_Community.domain.entity.FreePost;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.entity.*;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
@Setter
public class FreeCommentForm {
    private Integer id;
    private User nick;
    private String com;
    private Date date;
    private FreePost free_id;
    public FreeComment toEntity(){
        return new FreeComment(id, nick, com, date, free_id);
    }
}

