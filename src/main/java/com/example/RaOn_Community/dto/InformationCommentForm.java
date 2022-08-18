package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.InformationComment;
import com.example.RaOn_Community.domain.entity.InformationPost;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.entity.*;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
@Setter
public class InformationCommentForm {
    private Integer id;
    private User nick;
    private String com;
    private Date date;
    private InformationPost infromation_id;
    public InformationComment toEntity(){
        return new InformationComment(id, nick, com, date, infromation_id);
    }
}
