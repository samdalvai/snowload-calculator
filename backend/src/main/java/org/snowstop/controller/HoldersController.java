package org.snowstop.controller;

import org.snowstop.model.Holder;
import org.snowstop.repository.HolderRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/holders")
public class HoldersController {
    private final HolderRepository holderRepository;

    public HoldersController(HolderRepository productRepository) {
        this.holderRepository = productRepository;
    }

    // URL example: http://localhost:8080/holders
    @GetMapping
    public List<Holder> getHolders() {
        return holderRepository.findAll();
    }

    // URL example: http://localhost:8080/holders/code/030303
    @GetMapping("/code/{code}")
    public Holder getHolder(@PathVariable String code) {

        return holderRepository.findById(code).orElseThrow(RuntimeException::new);
    }

}
