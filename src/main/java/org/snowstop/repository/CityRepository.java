package org.snowstop.repository;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository  extends JpaRepository<City, CityId> {

    List<City> findCityByZip(String zip);
}
