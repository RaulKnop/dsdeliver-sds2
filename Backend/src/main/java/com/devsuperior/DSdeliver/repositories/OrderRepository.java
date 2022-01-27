package com.devsuperior.DSdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.DSdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
