# Snowload Calculator
A web application for the calculation of snowload and snow retaining systems in Italy.
This is a React only version of the full stack `Snowload Calculator` app.

# Table of contents
* [How to configure](#how-to-configure)
* [How to use Snowload Calculator](#how-to-use-snowload-calculator)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

# How to configure

### Application Prerequisites

* Node.js 12 or higher

### How to run

* From inside the `root/` folder run `npm install` to install the required packages
* To start the frontend application, in the `root/` folder run:

> npm start

Access the application at http://localhost:3000 in the browser.

As an alternative you can use the dockerized version of `Node` by running `docker-comose up -d`

### How to test

* From inside the `root/` folder run `npm test` to run all the tests

# How to use Snowload Calculator

`Snowload Calculator` is a single page web application for the computation of
snow load and snow retaining systems in Italy.
The following is an overview on the different steps that need to 
be performed in order to use the application:

## Roof data
![Roof Data](img/roofData.png)
In the first page you have to select an italian city in the search field, and
provide the measures of the roof, namely the example steepness the roof lenght and the 
roof with.
The safety coefficient needs to be selected only if there
is another roof located under the one for which we are performing
the computation.

If the city is not listed i the list of cities, it is possible to add 
a new city with the `+` button on the right side of the search field:

![Add city.png](img/addCity.png)

## Snow load results
![Snow load results](img/snowloadResults.png)
After clicking the button `Compute` in teh previous page,
we are presented with the first results of the snowload computation.
At this phase we can either print the results or go on with the next step.

## Retainer selection

![Retainer selection](img/retainerSelection.png)
In this page we are able to select the retaining system
based on the type of roof and on the characteristics like the 
height of the system or the material.
In addition, each holder and retainer will have the different
available distances highlighted in green if the system
is resistant enough, otherwise it will be highlighted in red.

## Summary
![Summary](img/summary.png)
By clicking `Ahead` in the previous page we are prompted with
the final step of the computation, where we will be presented
with a summary containing the information on the computed snowload
and on the chosen retaining system.
At this step we can either print the final result, or proceed with a 
new computation.

## Other remarks
The application is available in three languages, namely English, Italian and
German.
The default language is chosen based on the default
language of the browser, otherwise it is possible to 
select the preferred language manually in the top right corner:

![Language](img/language.png)

# Acknowledgements

The products that can be chosen in the [retainer selection](#retainer-selection) section are produced 
by the company [Flender Flux](https://www.flender-flux.de/), based in Netphen, Germany.
I do not own the right to use the images and the data for commercial use, this tool and 
the resistance of the snow retaining systems specified in the data are just for demonstrating purposes.
In addition, the computations performed by the snow load computation tool are not guaranteed to be 
correct.

# Author
Samuel Dalvai