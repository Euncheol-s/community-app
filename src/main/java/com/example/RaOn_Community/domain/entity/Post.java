package com.example.RaOn_Community.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="post")
@AllArgsConstructor
@ToString
@Getter
@NoArgsConstructor
public class Post {
    @Id
    private Integer id;
    @Column(length = 100, nullable = false)
    private String title;
    @Column(length = 1500, nullable = false)
    private String content;
    @Column(length = 10, nullable = false)
    private String author;
    @Column(nullable = false)
    private Date board_date;
    @Column(nullable = false)
    private Integer recommend;
}
