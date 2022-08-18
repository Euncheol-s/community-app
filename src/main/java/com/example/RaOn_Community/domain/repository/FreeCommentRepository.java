package com.example.RaOn_Community.domain.repository;

import com.example.RaOn_Community.domain.entity.FreeComment;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface FreeCommentRepository extends CrudRepository<FreeComment, Integer> {
    @Override
    ArrayList<FreeComment> findAll();
}
