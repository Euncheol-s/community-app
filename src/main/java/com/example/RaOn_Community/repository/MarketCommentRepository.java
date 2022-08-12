package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.InformationComment;
import com.example.RaOn_Community.entity.MarketComment;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface MarketCommentRepository extends CrudRepository<MarketComment, Integer> {
    @Override
    ArrayList<MarketComment> findAll();
}
