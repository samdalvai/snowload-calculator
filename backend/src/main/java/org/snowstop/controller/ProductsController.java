package org.snowstop.controller;

import org.snowstop.model.Product;
import org.snowstop.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {

    private final ProductRepository productRepository;

    public ProductsController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // URL example: http://localhost:8080/products
    @GetMapping
    public List<Product> getCities() {
        return productRepository.findAll();
    }

    // URL example: http://localhost:8080/products/id/030303
    @GetMapping("/id/{id}")
    public Product getCity(@PathVariable String id) {

        return productRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    // URL example: http://localhost:8080/products/name/Nr.%2076%20B
    @GetMapping("/name/{name}")
    public List<Product> getCityByName(@PathVariable String name) {

        return productRepository.findProductByName(name);
    }

}
