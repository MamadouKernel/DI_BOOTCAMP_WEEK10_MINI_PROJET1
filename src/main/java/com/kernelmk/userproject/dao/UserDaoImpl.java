package com.kernelmk.userproject.dao;

import com.kernelmk.userproject.exception.UserNotFoundException;
import com.kernelmk.userproject.models.Users;
import com.kernelmk.userproject.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDaoImpl implements IUserDao {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public List<Users> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Users findById(int id) throws UserNotFoundException {
        Optional<Users> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException("User not found with id : " + id);
        }
    }

    @Override
    public Users create(Users users) {
        return userRepository.save(users);
    }
}
