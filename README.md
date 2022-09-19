# snowload-calculator
A web application for the calculation of snowload and snow retaining systems in Italy
Basic framework taken from tutorial [app](https://www.baeldung.com/spring-boot-react-crud)

# How to run
To start the Spring Boot API, from the root folder

> mvn spring-boot:run

Access the API on http://localhost:8080/cities.

In order to add a new city, you can make a `POST` request to the
`http://localhost:8080/cities` endpoint (you can use a tool like `Postman`), with the new city data in the body, for example:

```Json
{"zip": "00000", "name": "example-city", "province": "BZ", "altitude": 100}
```

# API endpoints

## `GET` endpoints:

`/cities`: lists all cities

`/cities/id`: retrieves the city based on the id. 
The id is composed of the zip code and the name of the city.
A request example might be: `/cities/id?zip=39040&name=Aldino`

`/cities/zip/`: retrieves the cities by zip code. 
A request example might be: `/cities/zip/39040`

`/cities/name/`: retrieves the cities by name. 
With this endpoint, the name must match the city name, partial matches will not be returned. 
A request example might be: `/cities/name/Bolzano`

`/cities/province/`: retrieves the cities by province. 
A request example might be: `/cities/name/BZ`


## `POST` endpoints:

`/cities`: add a new city to the list of cities. The data on the new city must be passed as a `json` to the body of the request,
for exaple: 

```Json
{
  "zip": "00000",
  "name": "example-city",
  "province": "BZ",
  "altitude": 100
}
```

On success, the API will return the URL with the id of the newly created city, for example: `/cities/id?zip=00000&name=example-city` 


<!--To start the frontend application, from inside the `frontend/` folder

> npm start

Access http://localhost:3000 in the browser.-->