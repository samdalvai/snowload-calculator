package org.snowstop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

    @Id
    String code;
    String name;
    @Column(name = "type")
    String retainerType;
    @Column(name = "height")
    String retainerHeight;
    String image;

    public Product() {
    }

    public Product(String code, String name, String retainerType, String retainerHeight, String image) {
        this.code = code;
        this.name = name;
        this.retainerType = retainerType;
        this.retainerHeight = retainerHeight;
        this.image = image;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
