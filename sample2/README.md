## Dependencies

* [Mediasoup v3 requirements](https://mediasoup.org/documentation/v3/mediasoup/installation/#requirements)
* Node.js >= v8.6
* [Browserify](http://browserify.org/)


## Run

# install dependencies and build mediasoup
npm install

# create the client bundle and start the server app
browserify client.js -o app-bundle.js
npm start
```
