package com.example.RaOn_Community.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "informationpost")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class InformationPost {
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
