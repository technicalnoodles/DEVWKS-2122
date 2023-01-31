"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="WebEx OAuth & Passport",s={unversionedId:"passport/passport-config",id:"passport/passport-config",title:"WebEx OAuth & Passport",description:"Passport is an authentication library that can be put into any JavaScript application using Express. The Passport webpage is here.",source:"@site/docs/passport/01-passport-config.mdx",sourceDirName:"passport",slug:"/passport/passport-config",permalink:"/DEVWKS-2122/passport/passport-config",draft:!1,editUrl:"https://cisco.com/docs/passport/01-passport-config.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Passport Configurations",permalink:"/DEVWKS-2122/category/passport-configurations"},next:{title:"Creating Cookies and Testing",permalink:"/DEVWKS-2122/passport/cookies"}},l={},p=[{value:"Passport Configuration",id:"passport-configuration",level:2},{value:"Passport Service",id:"passport-service",level:3},{value:"Authentication Routes",id:"authentication-routes",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webex-oauth--passport"},"WebEx OAuth & Passport"),(0,i.kt)("p",null,"Passport is an authentication library that can be put into any JavaScript application using ",(0,i.kt)("inlineCode",{parentName:"p"},"Express"),". The Passport webpage is ",(0,i.kt)("a",{parentName:"p",href:"https://www.passportjs.org/"},"here"),"."),(0,i.kt)("p",null,"If you look at the Passport webpage, you will notice they mention they use ",(0,i.kt)("inlineCode",{parentName:"p"},"Strategies"),". A strategy is their way of saying a process for authenticating to a service has been coded and made into a module for ease of use."),(0,i.kt)("p",null,"We will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cisco - Spark")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.passportjs.org/packages/passport-cisco-spark/"},"strategy")," in our application. But you can use any of the other ones they have too. Some examples are Facebook, Google, GitHub, LinkedIn, and the list can go on. But they will all work in the same way the Cisco strategy does."),(0,i.kt)("h2",{id:"passport-configuration"},"Passport Configuration"),(0,i.kt)("p",null,"We will configure the passport ",(0,i.kt)("em",{parentName:"p"},"service")," the web application will use and create the ",(0,i.kt)("em",{parentName:"p"},"authentication")," routes needed to fullfill the authentication flow."),(0,i.kt)("h3",{id:"passport-service"},"Passport Service"),(0,i.kt)("p",null,"The Passport service is the configuration we need to be able to run this library and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cisco-spark")," strategy. It will then be passed to the main application to be mode available to the rest of the applicaiton functions."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," directory, make a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"passport.js")," if it does not already exist."),(0,i.kt)("p",null,"Open this file in the Visual Studio Code(VSCode) editor."),(0,i.kt)("p",null,"The below code is what will be pasted into the ",(0,i.kt)("inlineCode",{parentName:"p"},"passport.js")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=services/passport.js showLineNumbers",title:"services/passport.js",showLineNumbers:!0},"const passport = require('passport');\nconst CiscoStrategy = require('passport-cisco-spark').Strategy;\nconst mongoose = require('mongoose');\nconst keys = require('../config/keys');\n\nconst User = mongoose.model('users');\n\npassport.serializeUser((user, done) => {\n  done(null, user.id);\n});\n\npassport.deserializeUser((id, done) => {\n  User.findById(id).then((user) => {\n    done(null, user);\n  });\n});\n\npassport.use(\n  new CiscoStrategy(\n    {\n      clientID: keys.ciscoClientID,\n      clientSecret: keys.ciscoClientSecret,\n      callbackURL: '/auth/cisco/callback',\n    },\n    (accessToken, refreshToken, profile, done) => {\n      console.log(profile);\n      User.findOne({\n        ciscoId: profile['_json']['userName'],\n      }).then((existingUser) => {\n        if (existingUser) {\n          done(null, existingUser);\n        } else {\n          new User({\n            ciscoId: profile['_json']['userName'],\n            name: profile['_json']['displayname'],\n            departmentId: profile['_json']['department'],\n          })\n            .save()\n            .then((user) => done(null, user));\n        }\n      });\n    }\n  )\n);\n")),(0,i.kt)("p",null,"In the above code, we tell the imported Passport library to use a new ",(0,i.kt)("inlineCode",{parentName:"p"},"CiscoStrategy"),". We give the ",(0,i.kt)("inlineCode",{parentName:"p"},"CiscoStrategy")," one argument with a few different fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"clientID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clientSecret"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackURL"),". The two client values are used by the server to make the call to our integration and the ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackURL")," URL is used by the integration so it knows who to send the data back to."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackURL")," is the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect URI")," we created in the Webex Integration.  "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackURL")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect URI")," must match otherwise WebEx will not allow the flow to continue. This is to prevent anyone from trying to take over the session.")),(0,i.kt)("p",null,"The second argument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CiscoStrategy")," is a callback function. The callback function has four inputs, ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"refreshToken"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"profile"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"done"),"\nOnce a successful authentication request occurs, this callback function is called, and we can then store the information we want."),(0,i.kt)("p",null,"To serialize a user, there is a function that Passport provides to us called ",(0,i.kt)("inlineCode",{parentName:"p"},"serializeUser"),". It takes a callback function with two arguments: ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"done"),". The user is the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," we got back from mongoose. We will be adding this function right below the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," model declaration."),(0,i.kt)("p",null,"Deserializing is like serializing a user. The difference being we need to first find the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," from the database before we can deserialize them. the function is call ",(0,i.kt)("inlineCode",{parentName:"p"},"deserializeuser")," and instead of taking a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," object, it takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," will be used to find the user with mongoose."),(0,i.kt)("h3",{id:"authentication-routes"},"Authentication Routes"),(0,i.kt)("p",null,"The authentication routes will be used to send authentication requests to different services and to receive these services responses.\nTo create them, we need to make a new file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"authRoutes.js")," if it does not already exist."),(0,i.kt)("p",null,"After it has been created, let's open that file in VSCode. You can paste the below code into the ",(0,i.kt)("inlineCode",{parentName:"p"},"authRoutes.js")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=routes/authRoutes.js showLineNumbers",title:"routes/authRoutes.js",showLineNumbers:!0},"const passport = require('passport');\n\nmodule.exports = (app) => {\n  app.get(\n    '/auth/cisco',\n    passport.authenticate('cisco-spark', { scope: ['spark:all'] })\n  );\n\n  app.get(\n    '/auth/cisco/callback',\n    passport.authenticate('cisco-spark'),\n    (req, res) => res.redirect('http://localhost:3000/events')\n  );\n\n  app.get('/api/logout', (req, res) => {\n    req.logout(function (err) {\n      if (err) {\n        return next(err);\n      }\n      res.redirect('http://localhost:3000/');\n    });\n  });\n\n  app.get('/api/current_user', (req, res) => {\n    res.send(req.user);\n  });\n};\n")),(0,i.kt)("p",null,"Looking at the top route. We are expecting a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request for ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/cisco"),". When we see this request we will forward the request to Passport to start the authentication flow. The first argument for the authentication request is what strategy it will use. This one will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cisco-spark")," strategy."),(0,i.kt)("p",null,"The second argument is the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," of what data we want to get back from the authentication request. In this case, it is the same ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," we defined in the Webex Integration. This first request that is sent to WebEx will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," like we saw in the OAuth flow, but no user data. The ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," is like a ticket."),(0,i.kt)("p",null,"We will exchange this ticket for the user data in the callback. Here is an example of what is returned as a URL:\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/auth/cisco/callback?code=YjJkNzdlOWItMTJ0000000000000000000000000000000000000_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f")),(0,i.kt)("p",null,"The second route is the route we are using as the callback for the integration. This callback route will make another call back to WebEx, but it will pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," from the previous request as an argument. Now that we have given the ticket back to WebEx, it will give us the user data we requested. This second route is needed to finish the OAuth flow."),(0,i.kt)("p",null,"The route ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/logout")," will be used to take care of logouts and it will tear down the session and invalidate the cookie at the same time."),(0,i.kt)("p",null,"Finally, we need an API to check if there is a user logged in. The ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/current_user")," route will provide this functionality. It is what our frontend will use to check if it can say someone is logged in or not as well."),(0,i.kt)("p",null,"Before testing the flow, let us configure the main applicaiton to use what we have setup and to allow cookies to be used for a user session."))}u.isMDXComponent=!0}}]);