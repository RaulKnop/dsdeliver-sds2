package com.devsuperior.DSdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.DSdeliver.dto.OrderDTO;
import com.devsuperior.DSdeliver.dto.ProductDTO;
import com.devsuperior.DSdeliver.entities.Order;
import com.devsuperior.DSdeliver.entities.OrderStatus;
import com.devsuperior.DSdeliver.entities.Product;
import com.devsuperior.DSdeliver.repositories.OrderRepository;
import com.devsuperior.DSdeliver.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productrepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()); }
	
      @Transactional()
      public OrderDTO insert(OrderDTO dto) {
    	  Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
    	  for (ProductDTO p : dto.getProducts()) {
    		  Product product = productrepository.getOne(p.getId());
    		  order.getProducts().add(product);
    	  }
    	  repository.save(order);
    	  return new OrderDTO(order);
    	  
      }
      
      @Transactional()
      public OrderDTO setDelivered(Long id) {
    	  Order order =  repository.getOne(id);
    	  order.setStatus(OrderStatus.DELIVERED);
    	  order = repository.save(order);
    	  return new OrderDTO(order);
    	  
      }
    	  
      
      }
		