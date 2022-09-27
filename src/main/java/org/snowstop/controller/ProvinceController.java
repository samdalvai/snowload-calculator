package org.snowstop.controller;

import org.snowstop.model.Province;
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

    // URL example: http://localhost:8080/provinces/shorthand/BZ
    @GetMapping("/shorthand/{shorthand}")
    public Province getProvince(@PathVariable String shorthand) {
        return provinceRepository.findById(shorthand).orElseThrow(RuntimeException::new);
    }

    // URL example: http://localhost:8080/provinces/name/Bolzano
    @GetMapping("/name/{name}")
    public List<Province> getProvinceByName(@PathVariable String name) {
        return provinceRepository.findProvinceByName(name);
    }

    // URL example: http://localhost:8080/provinces/namecontains/Bolz
    @GetMapping("/namecontains/{name}")
    public List<Province> getProvinceByNameContains(@PathVariable String name) {
        return provinceRepository.findProvinceByNameContains(name);
    }

    // URL example: http://localhost:8080/provinces/zone/I-A
    @GetMapping("/zone/{zone}")
    public List<Province> getProvinceByZone(@PathVariable String zone) {
        return provinceRepository.findProvinceByZone(zone);
    }

    // URL example: http://localhost:8080/provinces/load?lower=1.0&upper=2.0
    @GetMapping("/load")
    public List<Province> getProvinceByAltitude(@RequestParam(name = "lower") final Double lower,
                                        @RequestParam(name = "upper") final Double upper) {
        return provinceRepository.findProvinceByLoadBetween(lower,upper);
    }

    @PostMapping
    public ResponseEntity createProvince(@RequestBody Province province) throws URISyntaxException {
        Province savedProvince = provinceRepository.save(province);

        return ResponseEntity.created(new URI("/provinces/shorthand/" + savedProvince.getShorthand())).body(savedProvince);
    }

    @DeleteMapping("/shorthand/{shorthand}")
    public ResponseEntity deleteProvince(@PathVariable String shorthand) {
        provinceRepository.deleteById(shorthand);

        return ResponseEntity.ok().build();
    }

}
