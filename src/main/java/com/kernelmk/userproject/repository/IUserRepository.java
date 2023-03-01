package com.kernelmk.userproject.repository;

import com.kernelmk.userproject.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<Users, Integer> {
}
