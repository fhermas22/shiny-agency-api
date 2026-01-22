# Shiny Agency - Intermediate React

This repository contains the API code you'll need for the OpenClassrooms course "Créez une application React complète".
It pairs with [the frontend repository](https://github.com/fhermas22/shiny-agency).


## Running the API locally

To follow the course, you'll need to install the API locally on your machine. To do this:
1. Clone with `git clone https://github.com/fhermas22/shiny-agency-api`
2. Install `node_modules` with `npm` or `yarn`
3. Run the API with `npm start`


## Consuming the API
The Shiny API is a REST API. If you're unsure what a REST API is, feel free to check out the excellent course [Adopt REST APIs for your web projects](https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web).
Once launched, this API provides you with several routes:

- The route to retrieve freelancer profiles:
`GET /freelances`

- The route to get details of a freelancer profile:
`GET /profile/?id={id}`

- The route to get the questionnaire:
`GET /survey/`

- The route to get the questionnaire results:
`GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`


## Modifying the API

Feel free to explore the API for testing. This codebase was initialized with [Express Generator](https://expressjs.com/en/starter/generator.html).



## Shiny Agency Resources
- Github Repository : https://github.com/fhermas22/shiny-agency
- Demo Link : https://fhermas22.github.io/shiny-agency

#
 Experiment by @fhermas22 for [Shiny Agency Project](https://fhermas22.github.io/shiny-agency)