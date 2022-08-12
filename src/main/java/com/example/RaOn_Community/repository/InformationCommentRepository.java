package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.InformationComment;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface InformationCommentRepository extends CrudRepository<InformationComment, Integer> {
    @Override
    ArrayList<InformationComment> findAll();
}
