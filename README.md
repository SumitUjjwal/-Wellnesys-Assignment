# Node.js Express Application Development

## Steps followed:

- Set up the basic server: I installed Node.js and Express framework and created a basic server that listens on a specified port.

- Implementing routes: I created three different routes as per the requirements:

    1. Route 1: Handling GET requests for the root URL ("/") and displaying a welcome message.
    2. Route 2: Handling POST requests to "/api/users" and saving user information to a JSON file.
    3. Route 3: Handling GET requests to "/api/users" and retrieving user information from the JSON file.

- Using logger middleware: I implemented a middleware for logging incoming requests. This middleware logged the method, endpoint, and timestamp of each request to a log file.

- Using Error handling middleware: I added error handling for invalid routes and server errors. I utilized try-catch blocks to catch errors and send appropriate error responses to the client.

## Challenges faced:

- One challenge I faced was ensuring proper error handling and error messages. It required careful handling of exceptions and providing meaningful error responses to the client.

- Another challenge was ensuring the correct usage of file paths and file operations when working with the JSON file for storing user information.

## Lessons learned:

- Proper planning and organization of routes and middleware are crucial for building a maintainable and scalable web application.

- Error handling is an important aspect of application development and should be implemented effectively to provide a better user experience.

- Working with file operations and ensuring proper file paths can be a source of potential errors, so thorough testing and error handling are essential.


# API Documentation

## Route 1: Handle GET requests for the root URL ("/") and display a welcome message

- Description: This route handles GET requests to the root URL ("/") and displays a welcome message to the client.

- Endpoint: GET /

- Request Parameters: None

- Request Headers: None

- Response:
    - Success (200 OK): Returns a welcome message as a plain text response.
    - Error (500 Internal Server Error): If there is an error while processing the request.

- Example Request: GET /

- Example Response (200 OK):

```json
{
    "Welcome to the API!
    This is an web application built with Node.js and Express.js."
}
```

- Example Response (500 Internal Server Error):

```json
{
    "Internal server error."
}
```

## Route 2: Handle POST requests to "/api/users" and save user information to a JSON file

- Description: This route handles POST requests to "/api/users" and saves the provided user information to a JSON file that stores user data.

- Endpoint: POST /api/users

- Request Parameters: None

- Request Headers: Content-Type: application/json

- Request Body:
    - JSON object containing user information, including the following properties:
        - id (string, required): The unique ID of the user.
        - name (string, required): The name of the user.
        - email (string, required): The email address of the user.
        - age (number, required): The age of the user.

- Response:
    - Success (200 OK): Indicates that the user information has been successfully saved.
    - Error (500 Internal Server Error): If there is an error while saving the user information or processing the request.

- Example Request: POST /api/users
```json
{
   " Content-Type: application/json"
}
{
    "id": 11,
    "firstName": "Marcel",
    "lastName": "Jones",
    "maidenName": "Smith",
    "age": 39,
    "gender": "male",
    "email": "acharlota@liveinternet.ru",
    "phone": "+967 253 210 0344",
    "username": "acharlota",
    "password": "M9lbMdydMN",
    "birthDate": "1961-09-12",
    "image": "https://robohash.org/impeditautest.png",
    "bloodGroup": "B−",
    "height": 203,
    "weight": 63.7,
    "eyeColor": "Amber",
    "hair": {
        "color": "Black",
        "type": "Straight"
    },
    "domain": "feedburner.com",
    "ip": "137.235.164.173",
    "address": {
        "address": "2203 7th Street Road",
        "city": "Louisville",
        "coordinates": {
            "lat": 38.218107,
            "lng": -85.779006
        },
        "postalCode": "40208",
        "state": "KY"
    },
    "macAddress": "59:E8:70:5A:E5:D6",
    "university": "Hodeidah University",
    "bank": {
        "cardExpire": "05/24",
        "cardNumber": "5893925889459720",
        "cardType": "maestro",
        "currency": "Rial",
        "iban": "NL97 UWMY 2503 2999 43"
    },
    "company": {
        "address": {
            "address": "308 Woodleaf Court",
            "city": "Glen Burnie",
            "coordinates": {
                "lat": 39.1425931,
                "lng": -76.6238441
            },
            "postalCode": "21061",
            "state": "MD"
        },
        "department": "Business Development",
        "name": "Kuhn-Harber",
        "title": "Account Executive"
    },
    "ein": "09-3791007",
    "ssn": "342-54-8422",
    "userAgent": "Mozilla/5.0 (Windows NT 5.2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.792.0 Safari/535.1"
}
```

- Example Response (200 OK):

```json
{
   " User information saved successfully."
}
```

- Example Response (500 Internal Server Error):

```json
{
    "Internal server error."
}
```

## Route 3: Retrieve User Information from the JSON File

- Description: This route allows you to retrieve user information from the JSON file that stores user data. You can retrieve all users or search for specific users by their ID.

- Endpoint: GET /api/users

- Request Parameters:
    - id (optional): The ID of the user to retrieve. If provided, the API will return only the user(s) matching the specified ID.

- Request Headers: None

- Response:
    - Success (200 OK): Returns the user information in JSON format.
    - Error (404 Not Found): If the user(s) with the specified ID is not found.
    - Error (500 Internal Server Error): If there is an error while reading the user data file or processing the request.

- Example Requests:

    - Retrieve all users: GET /api/users

    - Retrieve user by ID: GET /api/users?id=12345


- Example Response (200 OK):

```json
[
    {
        "id": 11,
        "firstName": "Marcel",
        "lastName": "Jones",
        "maidenName": "Smith",
        "age": 39,
        "gender": "male",
        "email": "acharlota@liveinternet.ru",
        "phone": "+967 253 210 0344",
        "username": "acharlota",
        "password": "M9lbMdydMN",
        "birthDate": "1961-09-12",
        "image": "https://robohash.org/impeditautest.png",
        "bloodGroup": "B−",
        "height": 203,
        "weight": 63.7,
        "eyeColor": "Amber",
        "hair": {
            "color": "Black",
            "type": "Straight"
        },
        "domain": "feedburner.com",
        "ip": "137.235.164.173",
        "address": {
            "address": "2203 7th Street Road",
            "city": "Louisville",
            "coordinates": {
                "lat": 38.218107,
                "lng": -85.779006
            },
            "postalCode": "40208",
            "state": "KY"
        },
        "macAddress": "59:E8:70:5A:E5:D6",
        "university": "Hodeidah University",
        "bank": {
            "cardExpire": "05/24",
            "cardNumber": "5893925889459720",
            "cardType": "maestro",
            "currency": "Rial",
            "iban": "NL97 UWMY 2503 2999 43"
        },
        "company": {
            "address": {
                "address": "308 Woodleaf Court",
                "city": "Glen Burnie",
                "coordinates": {
                    "lat": 39.1425931,
                    "lng": -76.6238441
                },
                "postalCode": "21061",
                "state": "MD"
            },
            "department": "Business Development",
            "name": "Kuhn-Harber",
            "title": "Account Executive"
        },
        "ein": "09-3791007",
        "ssn": "342-54-8422",
        "userAgent": "Mozilla/5.0 (Windows NT 5.2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.792.0 Safari/535.1"
    }
]
```

- Example Response (404 Not Found):

```json
{
  "User with ID 12345 not found."
}
```

- Example Response (500 Internal Server Error):

```json
{
  "Internal server error."
}
```