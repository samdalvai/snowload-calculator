# Snowload Calculator
A web application for the calculation of snowload and snow retaining systems in Italy
based on the full stack application template from tutorial [app](https://www.baeldung.com/spring-boot-react-crud).

# Application Prerequisites

* Java 1.8 or higher.
* Maven
* Docker

# How to run

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

# API endpoints

## `GET` endpoints:

* `/cities`: lists all cities

* `/cities/id`: retrieves the city based on the id. 
The id is composed of the zip code and the name of the city.
A request example might be: `/cities/id?zip=39040&name=Aldino`

* `/cities/zip/{zip}`: retrieves the cities by zip code. 
A request example might be: `/cities/zip/39040`

* `/cities/name/{name}`: retrieves the cities by name. 
With this endpoint, the name must match the city name, partial matches will not be returned. 
A request example might be: `/cities/name/Bolzano`

* `/cities/namecontains/{name}`: same as above, but returns also partial results.
A request example might be: `/cities/namecontains/Bolzano`

* `/cities/province/{province}`: retrieves the cities by province. 
A request example might be: `/cities/province/BZ`

* `/cities/altitude`: retrieve cities by altitude.
The lower and upper bound must be specified, for example: `/cities/altitude?lower=100&upper=200`


## `POST` endpoints:

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

## `DELETE` endpoints:

* `/cities/id`: deletes a city based on the id.
For example `/cities/id?zip=00000&name=example-city` will delete the city with zip code `00000` and name `example-city`.

 

<!--To start the frontend application, from inside the `frontend/` folder

> npm start

Access http://localhost:3000 in the browser.-->