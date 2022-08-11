package com.example.RaOn_Community.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="user")
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private Integer id;
    @Column(length = 10, nullable = false)
    private String nickname;
    @Column(length = 10, nullable = false)
    private String name;
    @Column(length = 8, nullable = false)
    private String num;
}
