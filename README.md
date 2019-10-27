# Micro Services
[![Build Status](https://travis-ci.org/Eazybee/MicroServices.svg?branch=develop)](https://travis-ci.org/Eazybee/MicroServices)
[![Maintainability](https://api.codeclimate.com/v1/badges/626c79a2ac7eadef474d/maintainability)](https://codeclimate.com/github/Eazybee/MicroServices/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/626c79a2ac7eadef474d/test_coverage)](https://codeclimate.com/github/Eazybee/MicroServices/test_coverage)


## Getting Started
This is a simple stateless microservice.

## Feautures
* Authentication:   `POSTS` `api/v1/login`
* Image Thumbnail:  `GET` `/api/v1/image/thumbnail`
* Json Document Patch:   `PATCH` `/api/v1/json`

_You need `Bearer` token from login endpoint to have access to other endpoints._
### Prerequisite
* Nodejs and Npm

## Technologies
- nodejs
- express
- express-gateway
- lerna

## How to get a copy
* Download the zip file, open it and  open a terminal at the root of this project

### Install
* Run this command in your terminal
```bash
npm install && npm run bootstrap
```

### Start Server
* Run this command in your terminal
```bash
npm start
```

## To Run Test
```bash
npm test
```

## API Documentation
- Start the server
- Got to: `GET`  `/docs/api/v1` endpoint


## Author
Ilori Ezekiel [Eazybee](https://github.com/eazybee)
