package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface CommentRepository extends CrudRepository<Comment, Integer> {
    @Override
    ArrayList<Comment> findAll();
}
