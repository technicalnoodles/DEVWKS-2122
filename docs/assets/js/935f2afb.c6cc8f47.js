"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/DEVWKS-2122/intro","docId":"intro"},{"type":"link","label":"Webex Integration","href":"/DEVWKS-2122/webex-integration","docId":"webex-integration"},{"type":"link","label":"OAuth flow","href":"/DEVWKS-2122/oauth-explain","docId":"oauth-explain"},{"type":"link","label":"MongoDb Configuration","href":"/DEVWKS-2122/mongodb-1","docId":"mongodb-1"},{"type":"category","label":"Passport Configurations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"WebEx OAuth & Passport","href":"/DEVWKS-2122/passport/passport-config","docId":"passport/passport-config"},{"type":"link","label":"Creating Cookies and Testing","href":"/DEVWKS-2122/passport/cookies","docId":"passport/cookies"},{"type":"link","label":"Creating Middleware","href":"/DEVWKS-2122/passport/middleware","docId":"passport/middleware"}],"href":"/DEVWKS-2122/category/passport-configurations"},{"type":"link","label":"Front-end Part 1","href":"/DEVWKS-2122/react-p-1","docId":"react-p-1"}]},"docs":{"intro":{"id":"intro","title":"Introduction","description":"This workshop will guide you through the process of adding Webex OAuth to a custom application. This application is built with ReactJs, Node, Express, and MongoDb.","sidebar":"tutorialSidebar"},"mongodb-1":{"id":"mongodb-1","title":"MongoDb Configuration","description":"Mongo is the database this application uses to store data. It has events that we can create or remove, and it will hold the user information we get back from WebEx.","sidebar":"tutorialSidebar"},"oauth-explain":{"id":"oauth-explain","title":"OAuth flow","description":"To be able to better understand what will be happening later in this workshop, it will be best to go over the OAuth flow and then what PassportJs will take care of.","sidebar":"tutorialSidebar"},"passport/cookies":{"id":"passport/cookies","title":"Creating Cookies and Testing","description":"Creating a Session Cookie","sidebar":"tutorialSidebar"},"passport/middleware":{"id":"passport/middleware","title":"Creating Middleware","description":"We need to update some redirects and make the backend require the users to be logged in to access the events API. We will make a middleware that will be put in the event routes to prevent unauthorized access to the event API.","sidebar":"tutorialSidebar"},"passport/passport-config":{"id":"passport/passport-config","title":"WebEx OAuth & Passport","description":"Passport is an authentication library that can be put into any JavaScript application using Express. The Passport webpage is here.","sidebar":"tutorialSidebar"},"react-p-1":{"id":"react-p-1","title":"Front-end Part 1","description":"We need to make our React frontend be able to detect when a user is logged in and then allow them to access the Events in our application.","sidebar":"tutorialSidebar"},"webex-integration":{"id":"webex-integration","title":"Webex Integration","description":"To be able to make an authentication request to the Webex service, we first need to create a Webex Integration. An integration allows us to authenticate a user and ask for certain permissions from the user. We may then make API requests on their behalf. After they have provided this initial access, we can then use it to authenticate the user as well.","sidebar":"tutorialSidebar"}}}')}}]);