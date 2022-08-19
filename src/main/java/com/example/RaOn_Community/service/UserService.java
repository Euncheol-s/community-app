package com.example.RaOn_Community.service;

import com.example.RaOn_Community.domain.Role;
import com.example.RaOn_Community.domain.entity.User;
import com.example.RaOn_Community.domain.repository.UserRepository;
import com.example.RaOn_Community.dto.UserForm;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService{
    private UserRepository up;
    @Transactional
    public Integer joinUser(UserForm uf){
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        uf.setNum(passwordEncoder.encode(uf.getNum()));
        return up.save(uf.toEntity()).getId();
    }
    @Override
    public UserDetails loadUserByUsername(String nickname) throws UsernameNotFoundException {
        Optional<User> userEntityWrapper=up.findByNickname(nickname);
        User userEntity=userEntityWrapper.get();

        List<GrantedAuthority> authority=new ArrayList<>();

        if(("admin@example.com").equals(nickname)){
            authority.add(new SimpleGrantedAuthority(Role.ADMIN.getValue()));
        }else{
            authority.add(new SimpleGrantedAuthority(Role.MEMBER.getValue()));
        }
        return new org.springframework.security.core.userdetails.User(userEntity.getNickname(), userEntity.getNum(), authority);
    }
}
