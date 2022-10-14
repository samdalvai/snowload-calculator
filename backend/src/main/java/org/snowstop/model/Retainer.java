package org.snowstop.model;

import javax.persistence.*;

@Entity
@Table(name = "retainer")
public class Retainer {

    @Id
    String code;

    @OneToOne
    @JoinColumn(name = "retainer_code")
    RetainerResistance resistance;

    String profile;

    @OneToOne
    @JoinColumn(name = "code")
    Product productInfo;

    public Retainer() {
    }

    public Retainer(String code, RetainerResistance resistance, String profile, Product product) {
        this.code = code;
        this.resistance = resistance;
        this.profile = profile;
        this.productInfo = product;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public RetainerResistance getResistance() {
        return resistance;
    }

    public void setResistance(RetainerResistance resistance) {
        this.resistance = resistance;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Product getProductInfo() {
        return productInfo;
    }

    public void setProductInfo(Product product) {
        this.productInfo = product;
    }
}
