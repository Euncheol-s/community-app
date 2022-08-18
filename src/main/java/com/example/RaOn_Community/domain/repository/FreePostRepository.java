package com.example.RaOn_Community.domain.repository;

import com.example.RaOn_Community.domain.entity.FreePost;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface FreePostRepository extends CrudRepository<FreePost, Integer> {
    @Override
    ArrayList<FreePost> findAll();
}
