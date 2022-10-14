package org.snowstop.controller;

import org.snowstop.model.Retainer;
import org.snowstop.repository.RetainerRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/retainers")
public class RetainersController {
    private final RetainerRepository retainerRepository;

    public RetainersController(RetainerRepository retainerRepository) {
        this.retainerRepository = retainerRepository;
    }

    // URL example: http://localhost:8080/retainers
    @GetMapping
    public List<Retainer> getRetainers() {
        return retainerRepository.findAll();
    }

    // URL example: http://localhost:8080/retainers/code/030303
    @GetMapping("/code/{code}")
    public Retainer getRetainer(@PathVariable String code) {

        return retainerRepository.findById(code).orElseThrow(RuntimeException::new);
    }

}
