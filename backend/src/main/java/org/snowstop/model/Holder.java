package org.snowstop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "holder")
public class Holder {

    @Id
    String code;
    Double resistance;

    @Column(name = "rooftype")
    String roofType;

    public Holder() {
    }

    public Holder(String code, Double resistance, String roofType) {
        this.code = code;
        this.resistance = resistance;
        this.roofType = roofType;
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

    public String getRoofType() {
        return roofType;
    }

    public void setRoofType(String roofType) {
        this.roofType = roofType;
    }
}
