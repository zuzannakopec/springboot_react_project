package com.example.projekt.controller;

import com.example.projekt.model.Item;
import com.example.projekt.model.User;
import com.example.projekt.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/item")

public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/getAll")
    public List<Item> list(){
        return itemService.getAllItems();
    }

    @DeleteMapping("/deleteItem/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable Integer id){
        try{
           itemService.deleteItem(id);
            return new ResponseEntity<>("User deleted.", HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>("User not fount.", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Item item){
           itemService.saveItem(item);
           return new ResponseEntity<>("User created", HttpStatus.OK);

    }

}
