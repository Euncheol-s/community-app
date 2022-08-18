package com.example.RaOn_Community.dto;

import com.example.RaOn_Community.domain.entity.Market;
import com.example.RaOn_Community.domain.entity.MarketComment;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.entity.*;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
@Setter
public class MarketCommentForm {
    private Integer id;
    private User nick;
    private String com;
    private Date date;
    private Market market_id;
    public MarketComment toEntity(){
        return new MarketComment(id, nick, com, date, market_id);
    }
}