package com.example.RaOn_Community.domain.repository;

import com.example.RaOn_Community.domain.entity.InformationPost;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface InformationRepository extends CrudRepository<InformationPost, Integer> {
    @Override
    ArrayList<InformationPost> findAll();
}

