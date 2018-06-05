const functions = require('firebase-functions');
const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');

// Import the appropriate service and chosen wrappers

const {
  dialogflow,
  Image,
} = require('actions-on-google')

// Create an app instance

const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', conv => {
  conv.ask('Hi, how is it going?')
  conv.ask("Here's a picture of a cat")
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }))
})

// Intent in Dialogflow called "CreditCard"
app.intent('CreditCard', conv => {
  // conv.close('See you later!')
  conv.ask("Hello Ankit..!");
})

app.intent('Default Fallback Intent', conv => {
  conv.ask("I didn't understand. Can you tell me something else?")
})



exports.princy = app;