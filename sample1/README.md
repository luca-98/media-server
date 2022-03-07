
## Installation

* Ensure you have installed the [dependencies](https://mediasoup.org/documentation/v3/mediasoup/installation/#requirements) required by mediasoup to build.

* Set up server:

```bash
$ npm install or yarn install
```

* Update `config.js` and customize it for your scenario:

* Genarate ssl
```bash
$ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Run it locally

* Run the Node.js server application in a terminal:
```bash
$ npm start
```