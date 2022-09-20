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
A complete list of the endpoints can be found in the next [chapter](#api-endpoints).

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

## API endpoints

## `GET` endpoints:

### CITIES

* `/cities`: lists all cities

* `/cities/id`: retrieves the city based on the id. 
The id is composed of the `zip` code and the `name` of the city.
A request example might be: `/cities/id?zip=39040&name=Aldino`

* `/cities/zip/{zip}`: retrieves the cities by zip code. 
A request example might be: `/cities/zip/39040`

* `/cities/name/{name}`: retrieves the cities by name. 
With this endpoint the name must match the city name, partial matches will not be returned. 

* `/cities/namecontains/{name}`: same as above, but returns also partial results.

* `/cities/province/{province}`: retrieves the cities by province. 

* `/cities/altitude`: retrieve cities by `lower` and `upper` bound for altitude.
The lower and upper bound must be specified in the URL, for example: `/cities/altitude?lower=100&upper=200`

### PROVINCES

* `/provinces`: lists all provinces
* `/provinces/shorthand/{shorthand}`: retrieves the province based on the shorthand of the province.
* `/provinces/name/{name}`: retrieves the province based on the name.
* `/provinces/namecontains/{name}`: same as above, but returns also partial results.
* `/provinces/zone/{zone}`: retrieves the province based on the zone.
* `/cities/load`: retrieve cities by `lower` and `upper` bound for load.
  The lower and upper bound must be specified in the URL, for example: `/province/load?lower=0.5&upper=1.2`


## `POST` endpoints:

### CITIES

* `/cities`: add a new city to the list of cities. The data on the new city must be passed as a `json` to the body of the request,
for exaple: 

```Json
{
  "zip": "00000",
  "name": "example-city",
  "province": "BZ",
  "altitude": 100
}
```
For the `POST` request you can use a tool like `Postman`.
On success, the API will return the URL with the id of the newly created city, for example: `/cities/id?zip=00000&name=example-city`

### PROVINCES

* `/provinces`: similarly as for the cities, add a new province by sending the data on the new province as a json in the body of the request:

```Json
{
  "shorthand": "XX",
  "name": "example-province",
  "zone": "I-A",
  "load": 1.5
}
```

## `DELETE` endpoints:

### CITIES

* `/cities/id`: deletes a city based on the id.
For example `/cities/id?zip=00000&name=example-city` will delete the city with zip code `00000` and name `example-city`.

### PROVINCES

* `/provinces/shorthand/{shorthand}`: deletes a city based on the id.
  For example `/provinces/shorthand/XX` will delete the city with shorthand `XX`.

# FRONT-END APPLICATION

## Application Prerequisites

* node.js 12 or higher

## How to run

* From inside the `frontend/` folder run `npm install` to install the required packages
* To start the frontend application, from inside the `frontend/` folder, run:

> npm start

Access the application at http://localhost:3000 in the browser.