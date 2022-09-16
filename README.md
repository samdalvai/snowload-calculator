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



<!--To start the frontend application, from inside the `frontend/` folder

> npm start

Access http://localhost:3000 in the browser.-->