package com.example.projekt.service;

import com.example.projekt.model.Rating;
import com.example.projekt.model.User;
import com.example.projekt.repositiory.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RatingServiceImpl implements RatingService{
    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public List<Rating> getAllItems() {
        return ratingRepository.findAll();
    }

    @Override
    public Rating save(Rating rating) {
        return ratingRepository.save(rating);
    }

}
