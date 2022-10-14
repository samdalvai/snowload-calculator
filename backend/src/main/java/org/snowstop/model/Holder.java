package org.snowstop.model;

import javax.persistence.*;

@Entity
@Table(name = "holder")
public class Holder {

    @Id
    String code;
    Double resistance;

    @Column(name = "rooftype")
    String roofType;

    @OneToOne
    @JoinColumn(name = "code")
    Product product;

    public Holder() {
    }

    public Holder(String code, Double resistance, String roofType, Product product) {
        this.code = code;
        this.resistance = resistance;
        this.roofType = roofType;
        this.product = product;
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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}
