- app
  - controllers
    - userController.js
    - productController.js
    - orderController.js
  - models
    - User.js
    - Product.js
    - Order.js
  - routes
    - userRoutes.js
    - productRoutes.js
    - orderRoutes.js
  - views
    - user
      - index.ejs
      - profile.ejs
    - product
      - index.ejs
      - details.ejs
    - order
      - index.ejs
      - history.ejs
- public
  - css
    - style.css
  - js
    - main.js
- server.js
- config
  - database.js
- utils <-- New folder for utilities
  - helper.js <-- Example utility/helper functions
- resources <-- New folder for RESTful API resources
  - users.js <-- Example resource for managing users in the RESTful API
  - products.js <-- Example resource for managing products in the RESTful API
  - orders.js <-- Example resource for managing orders in the RESTful API
- node_modules
- package.json

# Project Structure

## app

This directory contains the main application code organized into different modules such as controllers, models, routes, and views.

### controllers

This folder holds files that contain controller functions responsible for handling incoming requests, processing data, and sending responses back to clients.

### models

This folder contains files defining Mongoose models for MongoDB, representing different data entities such as users, products, and orders.

### routes

This folder contains files that define the routing logic for the application, mapping incoming HTTP requests to the appropriate controller functions.

### views

This folder contains files written in EJS (Embedded JavaScript) templating language, representing the UI (user interface) of the application.

## public

This directory contains static assets such as CSS files and client-side JavaScript files that are served to the client-side browser.

### css

This folder contains CSS files responsible for styling the HTML elements in the views.

### js

This folder contains JavaScript files that are executed on the client-side browser, providing interactivity and dynamic behavior to the UI.

## server.js

This is the main entry point of the Node.js application. It contains the code to configure and start the Express.js server.

## config

This directory contains configuration files for the application.

### database.js

This file typically contains the configuration and connection logic for the database (e.g., MongoDB) used by the application.

## middleware

This directory contains middleware functions that can be used to perform tasks such as authentication, logging, and error handling.

### authMiddleware.js

This file contains middleware functions responsible for authenticating users and protecting routes that require authentication.

### errorMiddleware.js

This file contains middleware functions for handling errors that occur during the request-response cycle and sending appropriate error responses to clients.

## utils

This directory contains utility/helper functions that can be used across different parts of the application.

### helper.js

This file contains various utility functions that assist in common tasks such as formatting data, validation, and other miscellaneous tasks.

## resources

This directory contains modules responsible for handling RESTful API resources.

### users.js

This file defines routes and controller functions for managing user resources in the RESTful API.

### products.js

This file defines routes and controller functions for managing product resources in the RESTful API.

### orders.js

This file defines routes and controller functions for managing order resources in the RESTful API.

## node_modules

This directory contains all the installed Node.js packages and dependencies of the application.

## package.json

This file contains metadata about the Node.js application and its dependencies. It also defines scripts for various tasks such as starting the server, running tests, etc.

# tailwind command

## npx tailwindcss -i ./taiwindcss/input.css -o ./app/views/css/Footer.css --watch

# Server run command

## npm run start

### Sagar add PR on project for testing
