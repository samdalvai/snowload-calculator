package org.snowstop.repository;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProvinceRepository  extends JpaRepository<Province, String> {
    List<Province> findProvinceByName(String name);
    List<Province> findProvinceByNameContains(String name);
    List<Province> findProvinceByZone(String zone);
    List<Province> findProvinceByLoadBetween(Double lower, Double upper);

}
