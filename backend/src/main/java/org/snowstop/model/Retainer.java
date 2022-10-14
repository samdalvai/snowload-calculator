package org.snowstop.model;

import javax.persistence.*;

@Entity
@Table(name = "retainer")
public class Retainer {

    @Id
    String code;
    Double resistance;

    String profile;

    @OneToOne
    @JoinColumn(name = "code")
    Product product;

    public Retainer() {
    }

    public Retainer(String code, Double resistance, String profile, Product product) {
        this.code = code;
        this.resistance = resistance;
        this.profile = profile;
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

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
