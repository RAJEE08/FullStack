package com.java.gift.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.gift.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
