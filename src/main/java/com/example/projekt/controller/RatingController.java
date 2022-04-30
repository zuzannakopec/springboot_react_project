package com.example.projekt.controller;

import com.example.projekt.model.Rating;
import com.example.projekt.model.User;
import com.example.projekt.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating")


public class RatingController {
    @Autowired
    private RatingService ratingService;

    @GetMapping("/getAll")
    public List<Rating> list(){
        return ratingService.getAllItems();
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Rating rating){
            ratingService.save(rating);
            return new ResponseEntity<>("User created", HttpStatus.OK);

    }
}
