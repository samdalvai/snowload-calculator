package org.snowstop.controller;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.model.Province;
import org.snowstop.repository.CityRepository;
import org.snowstop.repository.ProvinceRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/provinces")
public class ProvinceController {

    private final ProvinceRepository provinceRepository;

    public ProvinceController(ProvinceRepository provinceRepository) {
        this.provinceRepository = provinceRepository;
    }

    // URL example: http://localhost:8080/provinces
    @GetMapping
    public List<Province> getProvinces() {
        return provinceRepository.findAll();
    }


}
