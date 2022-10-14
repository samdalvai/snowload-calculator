package org.snowstop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "retainer_resistance")
public class RetainerResistance {

    @Id
    @Column(name = "retainer_code")
    String retainerCode;

    Double dist400;

    Double dist500;

    Double dist600;

    Double dist700;

    Double dist800;

    Double dist900;

    Double dist1000;

    public RetainerResistance() {
    }

    public RetainerResistance(String retainerCode, Double dist400, Double dist500, Double dist600, Double dist700, Double dist800, Double dist900, Double dist1000) {
        this.retainerCode = retainerCode;
        this.dist400 = dist400;
        this.dist500 = dist500;
        this.dist600 = dist600;
        this.dist700 = dist700;
        this.dist800 = dist800;
        this.dist900 = dist900;
        this.dist1000 = dist1000;
    }

    public String getRetainerCode() {
        return retainerCode;
    }

    public void setRetainerCode(String retainerCode) {
        this.retainerCode = retainerCode;
    }

    public Double getDist400() {
        return dist400;
    }

    public void setDist400(Double dist400) {
        this.dist400 = dist400;
    }

    public Double getDist500() {
        return dist500;
    }

    public void setDist500(Double dist500) {
        this.dist500 = dist500;
    }

    public Double getDist600() {
        return dist600;
    }

    public void setDist600(Double dist600) {
        this.dist600 = dist600;
    }

    public Double getDist700() {
        return dist700;
    }

    public void setDist700(Double dist700) {
        this.dist700 = dist700;
    }

    public Double getDist800() {
        return dist800;
    }

    public void setDist800(Double dist800) {
        this.dist800 = dist800;
    }

    public Double getDist900() {
        return dist900;
    }

    public void setDist900(Double dist900) {
        this.dist900 = dist900;
    }

    public Double getDist1000() {
        return dist1000;
    }

    public void setDist1000(Double dist1000) {
        this.dist1000 = dist1000;
    }
}
