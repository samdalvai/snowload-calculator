package org.snowstop.model;

import java.io.Serializable;

public class CityId implements Serializable {

    String zip;
    String name;

    public CityId() {
    }

    public CityId(String zip, String name) {
        this.zip = zip;
        this.name = name;
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
}
