package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.Comment;
import com.example.RaOn_Community.entity.FreeComment;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface FreeCommentRepository extends CrudRepository<FreeComment, Integer> {
    @Override
    ArrayList<FreeComment> findAll();
}
