package org.snowstop.controller;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.repository.CityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/cities")
public class CitiesController {

    private final CityRepository cityRepository;

    public CitiesController(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    // URL example: http://localhost:8080/cities
    @GetMapping
    public List<City> getCities() {
        return cityRepository.findAll();
    }

    // URL example: http://localhost:8080/cities/id?zip=39040&name=Aldino
    @GetMapping("/id")
    public City getCity(@RequestParam(name = "zip") final String zip,
                        @RequestParam(name = "name") final String name) {
        CityId id = new CityId(zip, name);

        return cityRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    // URL example: http://localhost:8080/cities/zip/39040
    @GetMapping("/zip/{zip}")
    public List<City> getCityByZip(@PathVariable String zip) {
        return cityRepository.findCityByZip(zip);
    }

    // URL example: http://localhost:8080/cities/name/Bolzano
    @GetMapping("/name/{name}")
    public List<City> getCityByName(@PathVariable String name) {
        return cityRepository.findCityByName(name);
    }

    // URL example: http://localhost:8080/cities/province/BZ
    @GetMapping("/province/{province}")
    public List<City> getCityByProvince(@PathVariable String province) {
        return cityRepository.findCityByProvince(province);
    }

    // URL example: http://localhost:8080/cities/namecontains/Bolzano
    @GetMapping("/namecontains/{name}")
    public List<City> getCityByNameContains(@PathVariable String name) {
        return cityRepository.findCityByNameContains(name);
    }

    // URL example: http://localhost:8080/cities/altitude?lower=100&upper=200
    @GetMapping("/altitude")
    public List<City> getCityByAltitude(@RequestParam(name = "lower") final Integer lower,
                                        @RequestParam(name = "upper") final Integer upper) {
        return cityRepository.findCityByAltitudeBetween(lower,upper);
    }

    @PostMapping
    public ResponseEntity createCity(@RequestBody City city) throws URISyntaxException {
        City savedCity = cityRepository.save(city);

        return ResponseEntity.created(new URI("/cities/id?zip=" + savedCity.getZip() + "&name=" + savedCity.getName())).body(savedCity);
    }

    @DeleteMapping("/id")
    public ResponseEntity deleteCity(@RequestParam(name = "zip") final String zip,
                                     @RequestParam(name = "name") final String name) {
        CityId id = new CityId(zip, name);

        cityRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
