package org.snowstop.controller;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.repository.CityRepository;
import org.springframework.web.bind.annotation.*;

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
        CityId id = new CityId(zip,name);

        return cityRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    // URL example http://localhost:8080/cities/zip/39040
    @GetMapping("/zip/{zip}")
    public List<City> getCityByZip(@PathVariable String zip) {
        return cityRepository.findCityByZip(zip);
    }

    // URL example http://localhost:8080/cities/name/Bolzano
    @GetMapping("/name/{name}")
    public List<City> getCityByName(@PathVariable String name) {
        return cityRepository.findCityByName(name);
    }

    // URL example http://localhost:8080/cities/province/BZ
    @GetMapping("/province/{province}")
    public List<City> getCityByProvince(@PathVariable String province) {
        return cityRepository.findCityByProvince(province);
    }

    /*@PostMapping
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = cityRepository.save(client);

        return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = cityRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setEmail(client.getEmail());
        currentClient = cityRepository.save(client);

        return ResponseEntity.ok(currentClient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable Long id) {
        cityRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }*/
}
