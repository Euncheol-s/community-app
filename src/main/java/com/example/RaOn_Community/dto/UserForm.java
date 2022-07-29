package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.entity.User;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class UserForm {
    private Integer id;
    private String nickname;
    private String name;
    private String num;
    private String major;
    public User toEntity(){
        return new User(id, nickname, name, num, major);
    }
}