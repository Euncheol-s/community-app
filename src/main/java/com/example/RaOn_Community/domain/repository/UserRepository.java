package com.example.RaOn_Community.domain.repository;

import com.example.RaOn_Community.domain.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Override
    ArrayList<User> findAll();

    Optional<User> findByNickname(String nickname);
}
