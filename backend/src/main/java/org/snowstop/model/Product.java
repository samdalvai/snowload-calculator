package org.snowstop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column(name = "code")
    String productCode;
    String name;
    @Column(name = "type")
    String retainerType;
    @Column(name = "height")
    String retainerHeight;
    String material;
    String image;

    public Product() {
    }

    public Product(String productCode, String name, String retainerType, String retainerHeight, String material, String image) {
        this.productCode = productCode;
        this.name = name;
        this.retainerType = retainerType;
        this.retainerHeight = retainerHeight;
        this.material = material;
        this.image = image;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRetainerType() {
        return retainerType;
    }

    public void setRetainerType(String retainerType) {
        this.retainerType = retainerType;
    }

    public String getRetainerHeight() {
        return retainerHeight;
    }

    public void setRetainerHeight(String retainerHeight) {
        this.retainerHeight = retainerHeight;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
