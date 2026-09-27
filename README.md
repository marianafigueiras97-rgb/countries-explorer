# Countries Explorer

A frontend web application built with **HTML, CSS and vanilla JavaScript** that consumes an external REST API to retrieve and display country information.

The project was developed as a practical exercise to strengthen JavaScript fundamentals, DOM manipulation, asynchronous programming and API integration.

## Features

- Display countries dynamically from an external REST API
- Search countries by name
- Filter countries by continent
- Sort countries alphabetically
- Sort countries by population
- Navigate to a dedicated country detail page
- Retrieve detailed information for a specific country
- Responsive country cards and detail views

## Knowledge Demonstrated

### JavaScript

The project demonstrates practical use of core JavaScript concepts:

- Variables and data manipulation
- Functions and arrow functions
- Objects and nested object properties
- Arrays and array methods
- Template literals
- Event handling
- Conditional logic
- Asynchronous JavaScript with `async/await`
- Error handling with `try/catch`

Array methods are used extensively to transform and query API data:

- `map()`
- `filter()`
- `find()`
- `sort()`
- `forEach()`
- `includes()`
- `join()`

## DOM Manipulation

Country information is generated dynamically instead of being hardcoded into the HTML.

The project demonstrates:

- DOM element selection
- Dynamic HTML rendering
- Event listeners
- Event delegation
- Reading values from form controls
- Re-rendering content after filtering and sorting
- Using `data-*` attributes to associate DOM elements with country data

## REST API Integration

Country information is retrieved from the REST Countries API using the Fetch API.

The project demonstrates:

- HTTP requests with `fetch()`
- Working with JSON responses
- Accessing nested API data
- Transforming API responses for presentation
- Dynamic API requests using country codes
- Handling asynchronous operations and request errors

## Search, Filtering and Sorting

The application performs client-side data manipulation using JavaScript.

Users can:

- Search countries by name
- Filter results by continent
- Sort countries from A–Z
- Sort countries by population

These features demonstrate working with arrays without requiring additional requests for every user interaction.

## Dynamic Country Detail Pages

Each country card links to a reusable detail page.

Instead of creating a separate HTML file for every country, the application passes the selected country's code through a URL query parameter:

`country-detail.html?code=CA`

The detail page reads the parameter using `URLSearchParams`, performs a specific API request and dynamically renders the selected country's information.

This demonstrates:

- URL query parameters
- Navigation between pages
- Passing identifiers between views
- Dynamic API endpoints
- Reusable page templates

## Technologies

- HTML5
- CSS3
- JavaScript
- REST APIs
- Fetch API
- DOM API

## Purpose

This is an educational portfolio project created to practise the fundamentals of frontend development without relying on JavaScript frameworks.

The main goal was to understand how JavaScript interacts with the DOM and external APIs before moving on to more advanced frontend technologies.
