# Snowload Calculator
A web application for the calculation of snowload and snow retaining systems in Italy
based on the full stack application template from tutorial [app](https://www.baeldung.com/spring-boot-react-crud).
The application architecture is based on a backend API with `Java Spring Boot`,
and a frontend application with `React`.


# Table of contents
* [BACK-END-APPLICATION](#back-end-application)
* [FRONT-END-APPLICATION](#front-end-application)

# BACK-END APPLICATION

## Application Prerequisites

* Java 1.8 or higher.
* Maven
* Docker

## How to run

* Run `docker-compose up -d` to run the mysql database.
* The configuration should load all the queries found in `sql/Init.sql` automatically the first time the docker container is created, if this is not the case you might need to run all of them manually.

To start the Spring Boot API, from the root folder run:

> mvn spring-boot:run

Access the API on http://localhost:8080/cities.
A complete list of the endpoints can be found in the [ENDPOINTS](ENDPOINTS.md) readme file.

As an alternative you can use the docker to run the dockerized version of `Spring Boot` with 
mysql, by uncommenting the service in the `docker-comose.yaml` file:

```yaml
  #web:   ## uncomment to run dockerized version of spring boot
   # depends_on:
    #  - db
    #restart: on-failure
    #build: .
    #ports:
    #  - "8080:8080"
    ...
```

# FRONT-END APPLICATION

## Application Prerequisites

* node.js 12 or higher

## How to run

* From inside the `frontend/` folder run `npm install` to install the required packages
* To start the frontend application, from inside the `frontend/` folder, run:

> npm start

Access the application at http://localhost:3000 in the browser.