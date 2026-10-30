# RESTful Post Management

A server-side post management application built using **Node.js, Express.js and EJS**, demonstrating RESTful routing and CRUD operations through structured HTTP request handling.

The application uses resource-based endpoints to manage posts, with unique identifiers for individual records and server-rendered views for displaying and modifying content.

## Key Features

- Create and publish posts.
- Retrieve all posts and individual post details.
- Edit existing post content.
- Delete posts.
- Dynamic routing using unique resource identifiers.
- Server-side rendering with EJS.
- HTTP method handling through Express middleware.

## Technology Stack

Backend: Node.js, Express.js  
Frontend: HTML5, CSS3, EJS  
Utilities: UUID, Method-Override

## RESTful Endpoints

 Method      Route                  Operation 
 
 GET       /posts                 Fetch all posts 
 GET       /posts/new             Display creation form 
 POST      /posts                 Create a post 
 GET       /posts/:id             Fetch a specific post
 GET       /posts/:id/edit        Display edit form 
 PATCH     /posts/:id             Update a post 
 DELETE    /posts/:id             Delete a post 

## Core Concepts

REST Architecture: Resource-oriented URL design and HTTP method semantics.
CRUD Operations: Managing the complete lifecycle of post records.
Express Routing: Handling requests through structured route handlers.
Dynamic Parameters: Identifying individual resources through URL parameters.
Middleware: Processing form data and supporting HTTP methods beyond standard HTML form capabilities.
EJS: Rendering dynamic content using server-side templates.

## Data Storage

Post records are currently maintained in an in-memory JavaScript array. Data is not persisted between server restarts.

---

Karan Jambale
[GitHub](https://github.com/karanjamble) · [LinkedIn](https://www.linkedin.com/in/karanjamble/)
