package com.example.projekt.service;

import com.example.projekt.model.Rating;
import com.example.projekt.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RatingService {

    public List<Rating> getAllItems();

    public Rating save(Rating rating);

}
