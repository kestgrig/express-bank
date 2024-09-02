# EXPRESS-BANK

_express js project (bank app)_

<br>

## 🌟 About

This project is for educational purposes only.

Site published at: https://github.com/kestgrig/express-bank

## 🎯 Project features/goals

-   Express js
-   Backend
-   Cruds

## 🧰 Getting Started

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo
    ```sh
    git clone https://github.com/kestgrig/express-bank .
    ```
2. Install NPM packages
    ```sh
    npm i
    ```
    or
    ```sh
    npm install
    ```
3. Run the server
    ```sh
    npm run dev
    ```
4. Download and install
    ```sh
    https://insomnia.rest/download
    ```

## 🧾 Instructions

1. Download and Install Insomnia: [link](https://insomnia.rest/download).
   Visit the Insomnia website and download the appropriate version for your operating system.

2. Create a New Request: Open Insomnia and click on the "New HTTP Request" button.
   Enter a name for your request.
   Choose the HTTP method (GET, POST, PUT, DELETE, etc.) that matches the API endpoint you want to interact with.

3. Enter the API Endpoint: Type the full URL of the endpoint you want to test into the request URL field.
   Ensure the URL is accurate and includes any required parameters.

4. Send the Request: Click the "Send" button to execute the request.
   Insomnia will display the response, including status codes, headers, and body content, allowing you to review and analyze the results.

## API Endpoints and Their Usage

### Account Management Endpoints

-   Create a New Account

    -   POST /api/account
        {
        "name": "Name",
        "surname": "Surname",
        "birthDate": "YYYY-MM-DD"
        }

-   Update an Account

    -   PUT /api/account/{name-surname}
        {
        "newName": "Name",
        "newSurname": "Surname",
        "newBirthDate": "YYYY-MM-DD"
        }

-   Retrieve Account Information

    -   GET /api/account/{name-surname}

-   Delete an Account

    -   DELETE /api/account/{name-surname}

-   Manage Account Name

    -   GET /api/account/{name-surname}/name

    -   PUT /api/account/{name-surname}/name
        {
        "newName": "Name"
        }

-   Manage Account SurName

    -   GET /api/account/{name-surname}/surname

    -   PUT /api/account/{name-surname}/surname
        {
        "newName": "Surname"
        }

-   Manage Account Date of Birth

    -   GET /api/account/{name-surname}/dob

    -   PUT /api/account/{name-surname}/dob
        {
        "newBirthDate": "YYYY-MM-DD"
        }

-   Financial Transaction Endpoints
-   Deposit Money to Account

    -   POST /api/deposit/{name-surname}
        {
        "amount": 800
        }

-   Withdraw Money from Account
    -   POST /api/withdrawal/{name-surname}
        {
        "amount": 500
        }
-   Transfer Money Between Accounts
    -   POST /api/transfer/{from-name-surname}/{to-name-surname}
        {
        "amount": 400
        }

## 🤓 Authors

Kestutis: [Github](https://github.com/kestgrig)
