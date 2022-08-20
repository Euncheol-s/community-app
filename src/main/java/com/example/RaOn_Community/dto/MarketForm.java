package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.Market;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@Setter
@ToString
public class MarketForm {
    private Integer id;
    private String title;
    private String author;
    private String content;
    private Date board_date;
    private Integer recommend;
    public Market toEntity(){
        return new Market(id, title, content, author, board_date, recommend);
    }
}
