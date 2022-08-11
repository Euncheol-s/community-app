package com.example.RaOn_Community.repository;

import com.example.RaOn_Community.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Override
    ArrayList<User> findAll();
}
