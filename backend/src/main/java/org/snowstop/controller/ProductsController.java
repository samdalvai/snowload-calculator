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
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    // URL example: http://localhost:8080/products/code/030303
    @GetMapping("/code/{code}")
    public Product getProduct(@PathVariable String code) {

        return productRepository.findById(code).orElseThrow(RuntimeException::new);
    }

    // URL example: http://localhost:8080/products/name/Nr.%2076%20B
    @GetMapping("/name/{name}")
    public List<Product> getProductByName(@PathVariable String name) {

        return productRepository.findProductByName(name);
    }

}
