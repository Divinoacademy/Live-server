# Live Server for Serving Files on Android using Node.js and Express

## Introduction

This project provides a simple live server implementation using Node.js and the Express.js framework. The server allows you to serve static files and automatically reloads when changes are made, providing a smooth development experience. This documentation outlines how to set up and use the live server on Termux for Android devices.

## Prerequisites

* Node.js and npm are installed on your Android device via Termux.

* Basic familiarity with the command line interface (CLI).

## Installation

1. Clone the Repository:
``` bash
    git clone https://github.com/Divinoacademy/Live-server.git
```
2. Navigate to the Project Directory:
``` bash
    cd live-server
```
3. Install Dependencies:
``` bash
    npm install
```
## Usage
1. Serve Files:

Place the files you want to serve in the **Public** directory within the project root folder *(If the Public is not available then create a new folder at the root folder and name it Public )*.

2. Start the Live Server:

To start the live server, run:

``` bash
npm start
```
The server will be accessible at http://localhost:8000 by default.

3. Access Files:
Open a web browser on your Android device and navigate to http://localhost:8000. You'll see the files you placed in the **Public** directory.

## Customization
* To modify the port number, update the **Port** variable in the **server.js** file.
* Customize the CORS settings in the **server.js** file according to your requirements.

## Notes
* The server will automatically reload whenever changes are made to files within the **Public** directory.
* For more advanced features, consider exploring libraries like **webpack-dev-middleware** and **webpack-hot-middleware** for hot module replacement (HMR).

## Contributing
Contributions are welcome! If you find issues or want to improve the project, feel free to submit pull requests.







