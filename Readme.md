
## Table of Contents

- [Description](#description)
- [Data Model](#data-model)
- [Usage](#usage)
- [Tests](#tests)


## Description
This is a robust backend project that is built with nodejs, expressjs, mongodb, mongoose, jwt, bcrypt, cloudinary and many more that are specially designed to handle a variety of operations for a social media-like platform.
It includes user controllers that manage registration, login, logout, and other user-related functionalities. 
The video controller allows users to perform CRUD operations on videos. Similarly, users can create, read, update, and delete comments and tweets. 
The like controller enables users to like videos, comments, and tweets, enhancing user interaction and engagement. 
Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more.
It serves as a complete video hosting website similar to youtube with all the features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and has features of twitter alongside hence the name youter(youtube + twitter).



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