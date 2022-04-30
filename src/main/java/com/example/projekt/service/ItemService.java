package com.example.projekt.service;



import com.example.projekt.model.Item;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItemService {
    public Item saveItem (Item item);
    public List<Item> getAllItems();
    public void deleteItem(Integer id);
}
