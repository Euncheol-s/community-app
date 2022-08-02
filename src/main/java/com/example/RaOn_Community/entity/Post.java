package com.example.RaOn_Community.entity;

import lombok.*;
import org.springframework.stereotype.Controller;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@ToString
@Getter
@NoArgsConstructor
public class Post {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
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
