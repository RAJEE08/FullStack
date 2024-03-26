package com.java.gift.Service;

import java.util.List;

import com.java.gift.model.Customer;

public interface CustomerService {

    Customer createCustomer(Customer customer);

    Customer getCustomerById(Long id);

    List<Customer> getAllCustomers();

    Customer updateCustomer(Long id, Customer customer);

    void deleteCustomer(Long id);
}

