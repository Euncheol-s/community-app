package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.FreePost;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@Setter
@ToString
public class FreePostForm {
    private Integer id;
    private String title;
    private String content;
    private String author;
    private Date board_date;
    private Integer recommend;
    public FreePost toEntity(){
        return new FreePost(id, title, content, author, board_date, recommend);
    }
}
