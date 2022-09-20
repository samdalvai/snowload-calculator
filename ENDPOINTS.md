
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
