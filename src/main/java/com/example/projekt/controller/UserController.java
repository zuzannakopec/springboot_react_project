package com.example.projekt.controller;

import com.example.projekt.model.User;
import com.example.projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user){

        List<User> ulist = userService.getUserByEmail(user.getEmail());
        if(ulist.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else{
            User dbUser = ulist.get(0);
            if(!Objects.equals(user.getPassword(), dbUser.getPassword())){
                return new ResponseEntity<User>(HttpStatus.CONFLICT);
            }else{
                return new ResponseEntity<User>(dbUser,  HttpStatus.OK);
            }
        }

    }
    @PostMapping("/getAccessLevel")
    public String getAccessLevel(@RequestBody User user){
        List<User> ulist = userService.getUserByEmail(user.getEmail());
        User dbUser = ulist.get(0);

        return dbUser.getAccessLevel();
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody User user){
        List<User> ulist = userService.getUserByEmail(user.getEmail());

        if(!ulist.isEmpty()){
            return new ResponseEntity<>("Email already in use", HttpStatus.CONFLICT);
        }else{
            userService.saveUser(user);
            return new ResponseEntity<>("User created", HttpStatus.OK);
        }
    }



    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }


}
