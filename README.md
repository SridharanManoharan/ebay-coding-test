# EbayK Fullstack coding challenge - Marketplace application

Congratulations! You made it to the eBay Kleinanzeigen remote Full Stack coding challenge. Here, we want to get a taste of your hands-on coding skills.

## Introduction

All tasks will be related to a marketplace application that you will develop more or less from scratch. There are 2 independent required tasks and one optional task that should be solved. You can adapt everything, add libraries, layers and other tools if this makes your life easier.

## Preparation (~15m)

1. Make sure that the following is installed and ready to be used:
    
    - Java Development Kit version >=8
    - Maven
    - Node >= 6
    - Your preferred IDE/editor
    
    
2. Check if your backend service can properly run

    ```
    cd server
    mvn spring-boot:run
    ```

    Your backend runs if you get a valid response from [http://localhost:8080/ad-single](http://localhost:8080/ad-single). Alternatively, you can also start the main class `com.ebayk.Application` in your preferred IDE.

3. Decide and set up a modern frontend framework like React, Angular or Vue.js and set up a basic application. Your frontend application should listen to port 3000.

You can set up a simple react app by executing:

    ```
    cd client
    npx create-react-app .
    npm start
    ```

Your frontend runs if you get a valid response from [http://localhost:3000/](http://localhost:3000/).
    
Before you start, keep in mind that you can skip parts of the challenge if you are stuck. If you have anything to comment then feel free to add comments at certain places. You can also add comments at the end of this file about general things, problems and remarks. If the time is short, it's also useful to describe quickly what you would have done in a required task that was not completely implemented.

After **5 hours** you have to upload the result as .zip file to a public file hoster like [https://filebin.net/](https://filebin.net/). You have 5 hours to solve the challenge. The exercises are feasible in less time but we added some buffer to make it less stressful.

No need to be hyper-punctual (e.g. 10 minutes earlier or sooner won't make a difference).

Coding guidance: 
 - Combine "clean code" with "working software",
 - Apply a basic architecture for your frontend and backend,
 - Usability and the basic design should be state of the art. The usage of component frameworks is allowed but not mandatory.
 - Old browser support is nice to have
 - We appreciate any kind of tests to ensure requirements are fulfilled

## Tasks

### 1. Refactor a legacy functionality (~60m)

There are pieces of legacy code in every big system that are horrible structured and not tested. It's crucial that you are able to understand, to improve and to test legacy code.

Start the server and open [http://localhost:8080/users/3/rated-users](http://localhost:8080/users/3/rated-users). There, you see a list of all users that were rated by the user with id `3`. The functionality is implemented in `com.ebayk.service.RatingAnalyzer`. For this exercise, you do not need to touch other classes.

Target of this exercise is to keep its working functionality as it is. Do your best to fix (potential) bugs and improve its readability, reliability, performance and testability.


### 2. Basic marketplace application (~180m)

Maybe you already noticed: our website is a bit outdated. So we need your help!
Take a look at our website [www.ebay-kleinanzeigen.de](https://www.ebay-kleinanzeigen.de) first and open a detail page by clicking on an classified ad.   

Your task is to build a simple classified ad detail page of a marketplace application, that displays details of an ad. To visualize the flow here are some sketches:

- [Detail page](./mockups/detail-page.png)
- [Detail page contact form](./mockups/detail-page-contact-form.png)
- [Detail page contact form confirmation](./mockups/detail-page-contact-form-confirmation.png)

It's not mandatory to build it exactly like sketched. It's only for inspiration. Adding a contact form is nice but not required. 

Also, you can choose whether you put it in a modal, or if you just want to append a form at the bottom of the page. 
It's completely up to you how you design your application and which technologies you use. Find a good balance between a well designed page and a page with a lot of features that are connected with the backend.

Using a real persistence framework like hibernate is not required. It's fine to just use existing repositories with in memory data.

If you feel comfortable with your application then don't hesitate to add tests in the backend and frontend.

Take your chance and show us what you've got. We would love to see that you are dying for ebay Kleinanzeigen and of course some modern Java, Javascript, CSS and HTML!

### 3. (Optional) Create two deployable units (~45m)

*Only tackle this if you are happy with your previous tasks.*

Nowadays, applications are containerized to deploy and scale them easily. Take your client and server, put them
in a container and make them portable. One possible solution can be to use docker-compose to start them with a single command `docker-compose up`.

## Your comments / remarks

What would you do if you had more time? Which trade-offs did you take? What architecture-layers did you create and why?

* FILL-ME 1
* FILL-ME 2


Have fun!



