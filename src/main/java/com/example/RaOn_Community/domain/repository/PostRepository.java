package com.example.RaOn_Community.domain.repository;

import com.example.RaOn_Community.domain.entity.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface PostRepository extends CrudRepository<Post, Integer> {
    @Override
    ArrayList<Post> findAll();
}
