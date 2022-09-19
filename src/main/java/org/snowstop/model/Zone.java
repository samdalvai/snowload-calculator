package org.snowstop.model;

public enum Zone {

    IA("I-A"),
    IM("I-M"),
    II("II"),
    III("III");

    private final String name;

    Zone(String s) {
        name = s;
    }
}
