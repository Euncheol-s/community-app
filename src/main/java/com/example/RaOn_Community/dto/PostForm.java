package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
@Setter
public class PostForm {
    private Integer id;
    private String title;
    private String content;
    private String author;
    private Date board_date;
    private Integer recommend;
    public Post toEntity(){
        return new Post(id, title, content, author, board_date, recommend);
    }
}
