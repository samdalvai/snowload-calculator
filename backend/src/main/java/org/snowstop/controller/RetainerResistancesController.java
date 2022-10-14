package org.snowstop.controller;

import org.snowstop.model.RetainerResistance;
import org.snowstop.repository.RetainerResistanceRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/resistance")
public class RetainerResistancesController {
    private final RetainerResistanceRepository retainerResistanceRepository;

    public RetainerResistancesController(RetainerResistanceRepository retainerResistance) {
        this.retainerResistanceRepository = retainerResistance;
    }

    // URL example: http://localhost:8080/resistance
    @GetMapping
    public List<RetainerResistance> getResistances() {
        return retainerResistanceRepository.findAll();
    }


}
