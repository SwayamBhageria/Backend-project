
## Table of Contents

- [Description](#description)
- [Data Model](#data-model)
- [Usage](#usage)
- [Tests](#tests)


## Description
This project is a robust backend built with ExpressJS and MongoDB, designed to handle a variety of operations for a social media-like platform. It includes user controllers that manage registration, login, logout, and other user-related functionalities. The video controller allows users to perform CRUD operations on videos. Similarly, users can create, read, update, and delete comments and tweets. The like controller enables users to like videos, comments, and tweets, enhancing user interaction and engagement. Additionally, a dashboard controller provides an overview of user activities and interactions. This backend serves as a solid foundation for a future frontend, paving the way for a full-stack social media application.

## Data model
- [Model link](https://app.eraser.io/workspace/0sis4adx07X4m7jpPVDN?origin=share)

## Usage

This project is a backend application, so you'll interact with it using API endpoints. Here are some examples:

**User Registration**

To register a new user, send a POST request to `/api/v1/users/register` with the following data:

```json
{
  "username": "example",
  "email": "example@email.com",
  "password": "examplepassword",
  "fullName": "Example User",
  "avatar": "avatar.jpg",
  "coverImage": "coverImage.jpg",
}


```

**User Login**

To login, send a POST request to `/api/v1/users/login` with the following data:

```json
{
  "email": "example@email",
  "password": "examplepassword"
}
```

**User Logout**

To logout, send a POST request to `/api/v1/users/logout` .

There a lot of endpoint you can see in routes.

## Tests
This project uses Postman for testing its API endpoints. 

The tests cover the following areas:

- User registration, login, and logout
- Video CRUD operations
- Comment CRUD operations
- Tweet CRUD operations
- Liking videos, comments, and tweets
- Dashboard functionality