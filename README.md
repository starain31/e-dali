# E-Dalí
**Intelligence without ambition is a bird without wings**<br/>
Buy [Salvador Dalí's](https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD) Artwork!

## Tasks 

### Backend API
1. [X] Endpoint for creating a new user
2. [X] Endpoint for logging the user in
3. [X] Endpoint for returning list of products
4. [X] Endpoint for managing wishlist of a particular user

## Frontend Application
1. [X] Registration view
2. [X] Login view
3. [X] Header view
4. [X] Products list view
5. [X] Wishlist view
6. [X] Search view

## Install and Run
`docker-compose up`

## Access
`localhost:3000` <br/>
To run in different port change the exposed port in `docker-compose.yml` file.

## Sample User

```
email: "salvadordalí@earth.sun",
password: "Gala Dalí",
```

## Caveat

1. Wishlist page need a hard reload `Ctrl+Shift+R` for wishlist reflection.
2. Couldn't able to write tests. Which I think is a must. But unfortunately fall short on that.
