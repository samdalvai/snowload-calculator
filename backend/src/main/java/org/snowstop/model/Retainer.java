package org.snowstop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "retainer")
public class Retainer {

    @Id
    String code;
    Double resistance;

    String profile;

    public Retainer() {
    }

    public Retainer(String code, Double resistance, String profile) {
        this.code = code;
        this.resistance = resistance;
        this.profile = profile;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Double getResistance() {
        return resistance;
    }

    public void setResistance(Double resistance) {
        this.resistance = resistance;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
}
