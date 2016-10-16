
// The JavaScript client works in both Node.js and the browser.


// Install the client from NPM
npm install clarifai

// Require the client
var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  'wHIFmkeN4zK0u-9fbniBuBuRvr46iqH90Qm6TpHR',
  'oXH7OBXjkHkxUprD-1ldyof2Q29WU76xaAkeBLFw'
);


app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);
