package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.Post;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class PostForm {
    private Integer id;
    private String title;
    private String content;
    public Post toEntity(){
        return new Post(id, title, content);
    }
}
