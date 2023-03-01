package com.kernelmk.userproject.controller;

import com.kernelmk.userproject.dao.IUserDao;
import com.kernelmk.userproject.exception.UserNotFoundException;
import com.kernelmk.userproject.models.Users;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    IUserDao userDao;

    @GetMapping()
    public ResponseEntity<List<Users>> getAll() {
        try {
            return ResponseEntity.ok(userDao.findAll());
        } catch (Exception e) {
            return new ResponseEntity<List<Users>>((List<Users>) null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> findById(@PathVariable("id") int id) throws UserNotFoundException {
        return ResponseEntity.ok(userDao.findById(id));
        /*try {
            Optional<Users> user = userDao.findById(id);

            if (user.isPresent()) {
                return new ResponseEntity<>(user.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<Users>((Users) null, HttpStatus.INTERNAL_SERVER_ERROR);
        }*/
    }

    @PostMapping()
    public ResponseEntity<Users> create(@Valid @RequestBody Users data) {
        try {
            return new ResponseEntity<Users>(userDao.create(data), HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<Users>((Users) null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
