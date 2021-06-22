# Social Media App


## Technology

* JavaScript

## Dependencies

* Express
* Mongoose
* Dotenv
* Helmet
* Morgan
* Brcypt

## Connection

* Post 8800

## Credits

* JP Ferreira
* Dewald Viljoen

## Development Status

* Server
* Connected to MongoDB
* User Registration
* User can Login
* User can Follow and become Follower (URL = Gets Follower and JSON = Gets a Following)


## Current Position

* Part one - https://www.youtube.com/watch?v=ldGl6L4Vktk

1:00:42 - Following

## Test User

{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "following": [],
    "isAdmin": false,
    "_id": "60d1be74ea968233939ece01",
    "username": "Tester",
    "email": "test@mail.com",
    "password": "$2b$10$X8Kv6cmXwHOEjDvECTSlv.IglT4B3u3BN7OfHRUuegz73AMlyg/JC",
    "createdAt": "2021-06-22T10:41:56.410Z",
    "updatedAt": "2021-06-22T10:41:56.410Z",
    "__v": 0
}

{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "following": [],
    "isAdmin": false,
    "_id": "60d1c28474ea98352e550277",
    "username": "Tester 2",
    "email": "test2@mail.com",
    "password": "$2b$10$LPYTihDerzOrs2sO9v6sD.E7XRd/k0lNEc4yyCB20.QqTuB3U6J3S",
    "createdAt": "2021-06-22T10:59:16.202Z",
    "updatedAt": "2021-06-22T10:59:16.202Z",
    "__v": 0
}

URL = 01 (Gets a follower of 77)

JSON = 77 (Gets a following of 01)

URL = 06 (Gets follower of 05)

JSON = 05 (Gets following of 06)