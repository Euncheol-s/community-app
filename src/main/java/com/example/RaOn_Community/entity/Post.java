package com.example.RaOn_Community.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.stereotype.Controller;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@AllArgsConstructor
@ToString
@Getter
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private Integer id;
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private String author;
    @Column
    private Date board_date;
    @Column
    private Integer recommend;

}
