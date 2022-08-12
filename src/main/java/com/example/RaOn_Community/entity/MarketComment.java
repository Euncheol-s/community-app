package com.example.RaOn_Community.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "marketcomment")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class MarketComment {
    @Id
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "nick",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private User nickname;
    @Column(length = 150, nullable = false)
    private String com;
    @Column(nullable = false)
    private Date date;
    @ManyToOne
    @JoinColumn(name = "market_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private Market market_id;
}