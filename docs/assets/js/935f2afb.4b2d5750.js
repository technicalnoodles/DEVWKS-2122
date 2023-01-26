"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/DEVWKS-2122/intro","docId":"intro"},{"type":"link","label":"Webex Integration","href":"/DEVWKS-2122/webex-integration","docId":"webex-integration"},{"type":"link","label":"OAuth flow","href":"/DEVWKS-2122/oauth-explain","docId":"oauth-explain"},{"type":"link","label":"Passport Part 1","href":"/DEVWKS-2122/passport-install","docId":"passport-install"},{"type":"link","label":"MongoDb Part 1","href":"/DEVWKS-2122/mongodb-1","docId":"mongodb-1"},{"type":"link","label":"Passport Part 2","href":"/DEVWKS-2122/passport-p-2","docId":"passport-p-2"},{"type":"link","label":"Front-end Part 1","href":"/DEVWKS-2122/react-p-1","docId":"react-p-1"},{"type":"link","label":"Passport Part 3","href":"/DEVWKS-2122/passport-p-3","docId":"passport-p-3"}]},"docs":{"intro":{"id":"intro","title":"Introduction","description":"This workshop will guide you through the process of adding Webex OAuth to a custom application. This application is built with ReactJs, Node, Express, and MongoDb.","sidebar":"tutorialSidebar"},"mongodb-1":{"id":"mongodb-1","title":"MongoDb Part 1","description":"Mongo is the database this application uses to store data. It has events that we can create or remove, and it will hold the user information we get back from WebEx.","sidebar":"tutorialSidebar"},"oauth-explain":{"id":"oauth-explain","title":"OAuth flow","description":"To be able to better understand what will be happening later in this workshop, it will be best to go over the OAuth flow and then what PassportJs will take care of.","sidebar":"tutorialSidebar"},"passport-install":{"id":"passport-install","title":"Passport Part 1","description":"Passport is an authentication library that can be put into any JavaScript application using Express. The Passport webpage is here.","sidebar":"tutorialSidebar"},"passport-p-2":{"id":"passport-p-2","title":"Passport Part 2","description":"After being able to successfully create a user or find a user, we need to be able to set a cookie for them, so their session is persistent. To do this, we need be able to serialize the user, deserialize the user, and enable cookies.","sidebar":"tutorialSidebar"},"passport-p-3":{"id":"passport-p-3","title":"Passport Part 3","description":"We need to update some redirects and make the backend require the users to be logged in to access the events API. We will make a middleware that will be put in the event routes to prevent unauthorized deletion of an event.","sidebar":"tutorialSidebar"},"react-p-1":{"id":"react-p-1","title":"Front-end Part 1","description":"We need to make our React frontend be able to detect when a user is logged in and then allow them to access the Events in our application.","sidebar":"tutorialSidebar"},"webex-integration":{"id":"webex-integration","title":"Webex Integration","description":"To be able to make an authentication request to the Webex service, we first need to create a Webex Integration. An integration allows us to authenticate a user and ask for certain permissions from the user. We may then make API requests on their behalf. After they have provided this initial access, we can then use it to authenticate the user as well.","sidebar":"tutorialSidebar"}}}')}}]);