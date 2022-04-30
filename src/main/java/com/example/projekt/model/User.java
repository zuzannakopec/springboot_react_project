package com.example.projekt.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @Column(unique=true)
    public String email;
    public String password;
    public String accessLevel;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getAccessLevel() {
        return accessLevel;
    }

    public void setAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
    }

    public User(){}

    public User(int id, String email, String password, String accessLevel) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.accessLevel = accessLevel;
    }
}
