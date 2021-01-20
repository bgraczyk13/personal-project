const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IAhbnFomlkqf7ZQgHaxYMWuMOWdKahZ05OXys7NHaDWRfiX7hgVAdNcjSmEFgagb0anLCGZZh79k46OBFt4y1kU00EcBQXtPV');

// API

// App config 
const app= express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "usd", 
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

// Example endpoint 
// http://localhost:5001/clone-17eb9/us-central1/api