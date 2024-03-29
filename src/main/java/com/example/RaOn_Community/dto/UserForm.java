package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Setter
@Getter
@ToString
public class UserForm {
    private Integer id;
    private String nickname;
    private String name;
    private String num;
    public User toEntity(){
        return new User(id, nickname, name, num);
    }
}
