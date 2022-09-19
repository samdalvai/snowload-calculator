package org.snowstop.repository;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository  extends JpaRepository<City, CityId> {

    List<City> findCityByZip(String zip);
    List<City> findCityByProvince(String province);
    List<City> findCityByName(String name);
    List<City> findCityByNameContains(String name);
    List<City> findCityByAltitudeBetween(Integer lower, Integer upper);


}
