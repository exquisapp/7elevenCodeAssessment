# 711CodeAssessment
Code assessment testing full stack development experience using Angular and NestJS stack and Pokemon API

## Getting Started 

This project uses Docker Compose to simplify the development and deployment process. 

### Prerequisites

- Docker installed and running on your system (https://www.docker.com/get-started/)
- Docker Compose installed (https://docs.docker.com/compose/install/)
- Node.js and npm (or yarn) installed on your system (https://nodejs.org/en/download/package-manager/current)

### Development Setup

1. **Clone the Repository:**

```bash
   git clone https://github.com/exquisapp/7elevenCodeAssessment.git
```

2. **Install Dependencies:**

Navigate to the project directory and run:

```bash
docker-compose up
```
3. Access the Application:

The Angular application should be accessible in your web browser at http://localhost:4200.

The Nestjs application should be accessible at http://localhost:3000

To use the swagger UI for testing and documentation access it at http://localhost:3000/api/docs#/Pokeman/PokemonController_getPokemonList


# Pokémon Backend with NestJS

This repository contains a NestJS backend application that interacts with the PokeAPI to serve Pokemon data. The application includes endpoints to display a paginated view of Pokemon and to fetch detailed information about a specific Pokemon. The application is containerized using Docker.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
    - [Without Docker](#without-docker)
    - [With Docker](#with-docker)
- [API Endpoints](#api-endpoints)
  - [Get All Pokemon](#get-all-pokémon)
  - [Get Pokemon by id](#get-pokémon-by-name)


## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- NestJS CLI (v7 or higher)
- Docker

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/exquisapp/711-pokemon-api.git
   cd 711-pokemon-api

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```
2. **Access the application:**

 *Open your browser and navigate to http://localhost:3000.*

```bash
GET /pokemon?limit=10&offset=0 - Get a paginated list of Pokémon.
GET /pokemon/:id - Get detailed information about a Pokémon by id.
```
  **With Docker**
    1. **Build the Docker image:**
  ```bash
    docker run -p 3000:3000 711-pokemon-api
  ```
    2. **Run the Docker container:**
   ```bash
    docker run -p 3000:3000 711-pokemon-api
  ```

  This application uses Swagger to provide interactive API documentation and testing. Follow the steps below to access and use the Swagger documentation.

  To start the swagger UI

  access this link http://localhost:3000/api/docs#/Pokeman/PokemonController_getPokemonList

**Explore the API:**
The Swagger UI will display all available endpoints with detailed information about each one.
You can interact with the API directly from the Swagger UI by providing necessary parameters and clicking the "Execute" button.


# 711Pokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
