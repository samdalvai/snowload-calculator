package org.snowstop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "city")
@IdClass(CityId.class)
public class City {

    @Id
    String zip;
    @Id
    String name;
    String province;
    Integer altitude;

    public City() {
    }

    public City(String zip, String name, String province, Integer altitude) {
        this.zip = zip;
        this.name = name;
        this.province = province;
        this.altitude = altitude;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public Integer getAltitude() {
        return altitude;
    }

    public void setAltitude(Integer altitude) {
        this.altitude = altitude;
    }
}
