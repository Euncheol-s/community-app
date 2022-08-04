package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.Market;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface MarketRepository extends CrudRepository<Market, Integer> {
    @Override
    ArrayList<Market> findAll();
}

