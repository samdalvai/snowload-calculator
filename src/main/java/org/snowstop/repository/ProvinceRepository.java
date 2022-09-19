package org.snowstop.repository;

import org.snowstop.model.City;
import org.snowstop.model.CityId;
import org.snowstop.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProvinceRepository  extends JpaRepository<Province, String> {

}
