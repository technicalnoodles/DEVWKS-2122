"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(t),k=s,m=c["".concat(l,".").concat(k)]||c[k]||u[k]||i;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=k;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[c]="string"==typeof e?e:s,a[1]=r;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(7462),s=(t(7294),t(3905));const i={sidebar_position:6},a="Passport Part 2",r={unversionedId:"passport-p-2",id:"passport-p-2",title:"Passport Part 2",description:"After being able to successfully create a user or find a user, we need to be able to set a cookie for that user so their session is persistent. To do this, we need be able to serialize the user, deserialize the user, and enable cookies.",source:"@site/docs/passport-p-2.mdx",sourceDirName:".",slug:"/passport-p-2",permalink:"/DEVWKS-2122/passport-p-2",draft:!1,editUrl:"https://cisco.com/docs/passport-p-2.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MongoDb Part 1",permalink:"/DEVWKS-2122/mongodb-1"},next:{title:"Front-end Part 1",permalink:"/DEVWKS-2122/react-p-1"}},l={},p=[{value:"Serializing a User",id:"serializing-a-user",level:2},{value:"Deserializing a User",id:"deserializing-a-user",level:2},{value:"Creating a Session Cookie",id:"creating-a-session-cookie",level:2},{value:"Install cookie-session",id:"install-cookie-session",level:3},{value:"Create a Cookie Encryption Key",id:"create-a-cookie-encryption-key",level:3},{value:"Update Passport to Use a Cookie",id:"update-passport-to-use-a-cookie",level:3},{value:"Testing",id:"testing",level:3},{value:"Logging Out",id:"logging-out",level:2},{value:"Get Current User",id:"get-current-user",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"passport-part-2"},"Passport Part 2"),(0,s.kt)("p",null,"After being able to successfully create a user or find a user, we need to be able to set a cookie for that user so their session is persistent. To do this, we need be able to serialize the user, deserialize the user, and enable cookies."),(0,s.kt)("h2",{id:"serializing-a-user"},"Serializing a User"),(0,s.kt)("p",null,"To serialize a user, there is a function that Passport provides to us called ",(0,s.kt)("inlineCode",{parentName:"p"},"serializeUser"),". It takes a callback function will two arguments: ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"done"),". The user is the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," we got back from mongoose. We will be adding this function right below the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," model declaration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=services/passport.js showLineNumbers",title:"services/passport.js",showLineNumbers:!0},"const passport = require('passport');\nconst CiscoStrategy = require('passport-cisco-spark').Strategy;\nconst mongoose = require('mongoose');\nconst keys = require('../config/keys');\n\nconst User = mongoose.model('users');\n//add-line\npassport.serializeUser((user, done) => {\n  //add-line\n  done(null, user.id);\n  //add-line\n});\n")),(0,s.kt)("h2",{id:"deserializing-a-user"},"Deserializing a User"),(0,s.kt)("p",null,"Deserializing is similar to serializing a user. The differnce being we need to first find the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," from the database before we can deserialize them. the function is call",(0,s.kt)("inlineCode",{parentName:"p"},"deserializeuser")," and instead of taking a ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," object, it take an ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," will be used to find the user with mongoose."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=services/passport.js showLineNumbers",title:"services/passport.js",showLineNumbers:!0},"const passport = require('passport');\nconst CiscoStrategy = require('passport-cisco-spark').Strategy;\nconst mongoose = require('mongoose');\nconst keys = require('../config/keys');\n\nconst User = mongoose.model('users');\npassport.serializeUser((user, done) => {\n  done(null, user.id);\n});\n//add-line\npassport.deserializeUser((id, done) => {\n  //add-line\n  User.findById(id).then((user) => {\n    //add-line\n    done(null, user);\n    //add-line\n  });\n  //add-line\n});\n")),(0,s.kt)("h2",{id:"creating-a-session-cookie"},"Creating a Session Cookie"),(0,s.kt)("p",null,"To create a cookie for our users. We need to tell Passport to use a cookie and to do this we need to install a library called ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie-session"),"."),(0,s.kt)("h3",{id:"install-cookie-session"},"Install cookie-session"),(0,s.kt)("p",null,"In the CLI run the below command to install ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie-session"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"npm install cookie-session")),(0,s.kt)("h3",{id:"create-a-cookie-encryption-key"},"Create a Cookie Encryption Key"),(0,s.kt)("p",null,"We need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"keys.js")," file after it has finished installing. Open the ",(0,s.kt)("inlineCode",{parentName:"p"},"keys.js")," file in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," directory. We need to add a new property to the object in this file called ",(0,s.kt)("inlineCode",{parentName:"p"},"cookieKey"),". This object will be used as the encryption key for the cookie. This is an example of what the file should look after adding the ",(0,s.kt)("inlineCode",{parentName:"p"},"cookieKey")," property."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=config/keys.js showLineNumbers",title:"config/keys.js",showLineNumbers:!0},"module.exports({\n  ciscoClientID: 'asdfasdfasd',\n  ciscoClientSecret: 'sdfgasdfa',\n  //add-line\n  cookieKey: 'randomstring',\n});\n")),(0,s.kt)("h3",{id:"update-passport-to-use-a-cookie"},"Update Passport to Use a Cookie"),(0,s.kt)("p",null,"Now we need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," file. This will include importing the ",(0,s.kt)("inlineCode",{parentName:"p"},"cookieKey"),", importing the required libraries, telling the application to create a cookie, and configuring Passport to use the cookie."),(0,s.kt)("p",null,"We first need to import ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie-session"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"passport"),", and the ",(0,s.kt)("inlineCode",{parentName:"p"},"keys")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=index.js showLineNumbers",title:"index.js",showLineNumbers:!0},"const express = require('express');\nconst mongoose = require('mongoose');\n//add-line\nconst cookieSession = require('cookie-session');\n//add-line\nconst passport = require('passport');\n//add-line\nconst keys = require('./config/keys');\nrequire('./models/User');\nrequire('./services/passport');\nrequire('./models/Event');\n\nconst port = 5000;\n")),(0,s.kt)("p",null,"Now we can congifure the application to use create a cookie. We will tell the ",(0,s.kt)("inlineCode",{parentName:"p"},"app")," to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"cookieSession")," we imported. ",(0,s.kt)("inlineCode",{parentName:"p"},"cookieSession")," takes an object as an argument. The object has two properties in it: ",(0,s.kt)("inlineCode",{parentName:"p"},"maxAge")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"keys"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"maxAge")," property is the amount of time a cookie has before it expires in milliseconds. The ",(0,s.kt)("inlineCode",{parentName:"p"},"keys")," property is a list of keys that can be used to encrypt the session cookie."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=index.js showLineNumbers",title:"index.js",showLineNumbers:!0},"const express = require('express');\nconst mongoose = require('mongoose');\nconst cookieSession = require('cookie-session');\nconst passport = require('passport');\nconst keys = require('./config/keys');\nrequire('./models/User');\nrequire('./services/passport');\nrequire('./models/Event');\n\nconst port = 5000;\n\nmain().catch((err) => console.log(err));\n\nasync function main() {\n  await mongoose.connect('mongodb://localhost:27017');\n  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled\n}\n\nconst app = express();\napp.use(express.json());\n//add-line\napp.use(\n  //add-line\n  cookieSession({\n    //add-line\n    maxAge: 2 * 24 * 60 * 60 * 1000,\n    //add-line\n    keys: [keys.cookieKey],\n    //add-line\n  })\n  //add-line\n);\n")),(0,s.kt)("p",null,"Lastly we need to tell Passpport to use the cookie in a session. This is done with only two additional lines. The ",(0,s.kt)("inlineCode",{parentName:"p"},"initialize")," function tells passport to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"serialize")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deserialize")," functions we defined earlier. The ",(0,s.kt)("inlineCode",{parentName:"p"},"session")," function tells passport to use sessions after an authentication flow completes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=index.js showLineNumbers",title:"index.js",showLineNumbers:!0},"const express = require('express');\nconst mongoose = require('mongoose');\nconst cookieSession = require('cookie-session');\nconst passport = require('passport');\nconst keys = require('./config/keys');\nrequire('./models/User');\nrequire('./services/passport');\nrequire('./models/Event');\n\nconst port = 5000;\n\nmain().catch((err) => console.log(err));\n\nasync function main() {\n  await mongoose.connect('mongodb://localhost:27017');\n  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled\n}\n\nconst app = express();\napp.use(express.json());\n\napp.use(\n  cookieSession({\n    maxAge: 2 * 24 * 60 * 60 * 1000,\n    keys: [keys.cookieKey],\n  })\n);\n//add-line\napp.use(passport.initialize());\n//add-line\napp.use(passport.session());\n")),(0,s.kt)("h3",{id:"testing"},"Testing"),(0,s.kt)("p",null,"We can try running the ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," file now. To do this run the below command:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"node index.js")),(0,s.kt)("p",null,"Then attempt to authenticate using the below URL:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"localhost:5000/auth/cisco")),(0,s.kt)("p",null,"It should ask for a login and permissions. After accepting them the server will crash. This is because as of May 2022, an update to Passport has broken compatibility with ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie-session")," beacuse it does not have the ",(0,s.kt)("inlineCode",{parentName:"p"},"regenerate")," function or the ",(0,s.kt)("inlineCode",{parentName:"p"},"save")," function. The owner of Passport recommends using an older version till a fix is out. To do this we need to uninstall passport and install the previous version The below commands will do jsut that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall passport\nnpm install passport@0.5\n")),(0,s.kt)("p",null,"After starting the server back up and running through the authentication again, we should see ",(0,s.kt)("inlineCode",{parentName:"p"},"Cannot GET /auth/cisco/callback"),". This is expected but the authenication flow did finish successfully."),(0,s.kt)("h2",{id:"logging-out"},"Logging Out"),(0,s.kt)("p",null,"Lastly we need to be able to log out because we cannot do that right now. We will add one more route handler in the ",(0,s.kt)("inlineCode",{parentName:"p"},"authRoutes.js")," file."),(0,s.kt)("p",null,"The route will be for ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/logout")," and it will tear down the session and invalidate the cookie."),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"authRoutes.js")," file we will add the below code to do just that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=routes/authRoutes.js showLineNumbers",title:"routes/authRoutes.js",showLineNumbers:!0},"app.get('/api/logout', (req, res) => {\n  req.logout();\n  res.send('logged out');\n});\n")),(0,s.kt)("p",null,"If you restart the server and try going to this route, you will get back a logged out message."),(0,s.kt)("p",null,"Finally, we need to an API to check if there is a user logged in. This is what our frontend will use to check if it can say someone is logged in or not."),(0,s.kt)("h2",{id:"get-current-user"},"Get Current User"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/api/current_user', (req, res) => {\n  res.send(req.user);\n});\n")),(0,s.kt)("p",null,"We have finished almost everything we need to make a functioning login. We will now move to the frontend and work in React to add a login page and logic to only allow a user that is logged in to see the event page."))}c.isMDXComponent=!0}}]);