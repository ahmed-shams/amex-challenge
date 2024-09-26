# Code Structure Changes

## Modules 
Module structure is introduced to the server app to make the app more maintaibale
Each module should follow the following structure
* route folder: Contains all the routes logic, making it easy to manage routes separately.
* services folder: All the module relevant services should go there.
* client: To move the client components in that folder

## Root Level changes

* Moved utilities out to the utils folder for better reusability.
* index.ts: Handles server setup and starts the server

# Environment Configuration
* dotenv package was introduced to manage the environment configurations

# Code Linting and Formatting
* Ensured code quality with ESLint and formatting consistency with Prettier and the package.json was updated with relevant scripts

# Work still needs to be done

* Logging
* Use security middleware like Helmet (for Express or Fastify) to secure HTTP headers
* Dockerizing (Optional)