package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.InformationPost;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
public class InformationForm {
    private Integer id;
    private String title;
    private String author;
    private String content;
    private Date board_date;
    private Integer recommend;
    public InformationPost toEntity(){
        return new InformationPost(id, title, author, content, board_date, recommend);
    }
}
