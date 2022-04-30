package com.example.projekt.service;

import com.example.projekt.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
    public List<User> getUserByEmail(String email);
    public void deleteItem(Integer id);
}
