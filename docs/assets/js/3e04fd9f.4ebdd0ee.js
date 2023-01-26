"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},s="Passport Part 3",i={unversionedId:"passport-p-3",id:"passport-p-3",title:"Passport Part 3",description:"We need to update some redirects and make the backend require the users to be logged in to access the events API. We will make a middleware that will be put in the event routes to prevent unauthorized deletion of an event.",source:"@site/docs/passport-p-3.mdx",sourceDirName:".",slug:"/passport-p-3",permalink:"/DEVWKS-2122/passport-p-3",draft:!1,editUrl:"https://cisco.com/docs/passport-p-3.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Front-end Part 1",permalink:"/DEVWKS-2122/react-p-1"}},p={},l=[{value:"Create a Middleware",id:"create-a-middleware",level:2},{value:"Event Routes",id:"event-routes",level:2},{value:"Auth Routes Update",id:"auth-routes-update",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"passport-part-3"},"Passport Part 3"),(0,a.kt)("p",null,"We need to update some redirects and make the backend require the users to be logged in to access the events API. We will make a middleware that will be put in the event routes to prevent unauthorized deletion of an event."),(0,a.kt)("h2",{id:"create-a-middleware"},"Create a Middleware"),(0,a.kt)("p",null,"Create a new directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"middlewares")," in the root of the project. In this directory make a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"requirelogin.js")),(0,a.kt)("p",null,"The file will have the below code in it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=middlewares/requireLogin.js showLineNumbers",title:"middlewares/requireLogin.js",showLineNumbers:!0},"module.exports = (req, res, next) => {\n  if (!req.user) {\n    return res\n      .status(401)\n      .send({ error: 'You must be logged in to perform this action.' });\n  }\n  next();\n};\n")),(0,a.kt)("p",null,"This code checks if the request has a user attached and if it does not, we send back a 401 and a message."),(0,a.kt)("p",null,"Now we can update the routes."),(0,a.kt)("h2",{id:"event-routes"},"Event Routes"),(0,a.kt)("p",null,"We need import the ",(0,a.kt)("inlineCode",{parentName:"p"},"requireLogin")," middlware we created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventRoute")," file and then add it to the arguments of our routes."),(0,a.kt)("p",null,"It is shown in the below code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=routes/eventRoutes.js showLineNumbers",title:"routes/eventRoutes.js",showLineNumbers:!0},"const mongoose = require('mongoose');\nconst Event = mongoose.model('event');\n//add-line\nconst requireLogin = require('../middlewares/requireLogin');\n\nmodule.exports = (app) => {\n    //remove-line\n    app.get('/api/event', async (req, res) => {\n    //add-line\n    app.get('/api/event', requireLogin ,async (req, res) => {\n    const events = await Event.find({});\n    if (events) {\n      console.log(events);\n      res.json(events);\n    }\n  });\n\n//remove-line\n  app.post('/api/event', async (req, res) => {\n//add-line\n  app.post('/api/event', requireLogin ,async (req, res) => {\n    const title = req.body.title;\n    console.log(title);\n    const response = await new Event({ title, active: true }).save();\n    if (response) {\n      res.send('event created');\n    } else {\n      res.send('not created');\n    }\n  });\n\n//remove-line\n  app.put('/api/event', async (req, res) => {\n//add-line\n  app.put('/api/event',requireLogin , async (req, res) => {\n    const { _id, status } = req.body;\n    if (status === 'resolve') {\n      const resolveEvent = await Event.findByIdAndUpdate(_id, {\n        active: 'false',\n      });\n      res.send(resolveEvent);\n    }\n  });\n\n//remove-line\n  app.delete('/api/event', async (req, res) => {\n//add-line\n  app.delete('/api/event', requireLogin ,async (req, res) => {\n    const id = req.body._id;\n    const removeEvent = await Event.deleteOne({ _id: id });\n    res.send(removeEvent);\n  });\n};\n")),(0,a.kt)("p",null,"Now let\u2019s update the authentication routes."),(0,a.kt)("h2",{id:"auth-routes-update"},"Auth Routes Update"),(0,a.kt)("p",null,"We need to edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"authRoutes")," file back in the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," directory of the main project."),(0,a.kt)("p",null,"We need to stop the ugly redirect from Cisco to ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/cisco/callback")," and to redirect the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," back to the home page. To do this we need change the ",(0,a.kt)("inlineCode",{parentName:"p"},"res.send")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"res.redirect")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=routes/authRoutes.js showLineNumbers",title:"routes/authRoutes.js",showLineNumbers:!0},"const passport = require('passport');\n\nmodule.exports = (app) => {\n  app.get(\n    '/auth/cisco',\n    passport.authenticate('cisco-spark', { scope: ['spark:all'] })\n  );\n\n  app.get(\n    '/auth/cisco/callback',\n    passport.authenticate('cisco-spark'),\n    //add-line\n    (req, res) => res.redirect('http://localhost:3001/events')\n  );\n\n  app.get('/api/logout', (req, res) => {\n    req.logout();\n    //add-line\n    res.redirect('/');\n  });\n\n  app.get('/api/current_user', (req, res) => {\n    res.send(req.user);\n  });\n};\n")),(0,a.kt)("p",null,"With all of this done. We have finished the workshop."))}u.isMDXComponent=!0}}]);