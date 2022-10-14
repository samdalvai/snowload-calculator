package org.snowstop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "province")
public class Province {

    @Id
    String shorthand;
    String name;
    String zone;

    @Column(name = "base_load")
    Double load;

    public Province() {
    }

    public Province(String shorthand, String name, String zone, Double load) {
        this.shorthand = shorthand;
        this.name = name;
        this.zone = zone;
        this.load = load;
    }

    public String getShorthand() {
        return shorthand;
    }

    public void setShorthand(String shorthand) {
        this.shorthand = shorthand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public Double getLoad() {
        return load;
    }

    public void setLoad(Double load) {
        this.load = load;
    }
}
