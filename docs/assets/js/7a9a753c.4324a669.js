"use strict";(self.webpackChunkdevwks_2122_docs=self.webpackChunkdevwks_2122_docs||[]).push([[203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6},o="Making the Frontend Reactive",s={unversionedId:"frontend",id:"frontend",title:"Making the Frontend Reactive",description:"We need to make our React frontend be able to detect when a user is logged in and then allow them to access the Events in our application.",source:"@site/docs/05-frontend.mdx",sourceDirName:".",slug:"/frontend",permalink:"/DEVWKS-2122/frontend",draft:!1,editUrl:"https://cisco.com/docs/05-frontend.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Creating Middleware",permalink:"/DEVWKS-2122/passport/middleware"}},l={},p=[{value:"Redux Setup",id:"redux-setup",level:2},{value:"Creating Actions",id:"creating-actions",level:3},{value:"Creating a Reducer",id:"creating-a-reducer",level:3},{value:"Configuring the Store",id:"configuring-the-store",level:3},{value:"Login/Logout of Header",id:"loginlogout-of-header",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-the-frontend-reactive"},"Making the Frontend Reactive"),(0,i.kt)("p",null,"We need to make our React frontend be able to detect when a user is logged in and then allow them to access the Events in our application."),(0,i.kt)("p",null,"In this section we will be working with React, React Router, and Redux."),(0,i.kt)("p",null,"React is a frontend library used to create web UIs. React Router is a library that React can use to change pages in the application. Redux is a state library used to manage state and to pass state from one component to another without creating many dependencies."),(0,i.kt)("p",null,"We will start working with Redux first. There is some boiler plate code that has been inserted into the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file to save on time."),(0,i.kt)("p",null,"Please open the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," directory to see the React code."),(0,i.kt)("h2",{id:"redux-setup"},"Redux Setup"),(0,i.kt)("h3",{id:"creating-actions"},"Creating Actions"),(0,i.kt)("p",null,"Actions in Redux are what tell the library what to do. If there is an action of ",(0,i.kt)("inlineCode",{parentName:"p"},"FETCH_USER"),", it will do what has been defined for that action. We will be creating an action called ",(0,i.kt)("inlineCode",{parentName:"p"},"FETCH_USER"),". To do this, we need to create one directory and two files in that directory."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"client -> src")," directory, make a new directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),". After it has been created, please create the below files in it:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"types.js"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"types.js")," file, we need create a fetch user type. That will look like the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=actions/types.js showLineNumbers",title:"actions/types.js",showLineNumbers:!0},"export const FETCH_USER = 'fetch_user';\n")),(0,i.kt)("p",null,"This only defines a ",(0,i.kt)("em",{parentName:"p"},"type")," of action we can take in Redux."),(0,i.kt)("p",null,"We will now create the action this type will take in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=actions/index.js showLineNumbers",title:"actions/index.js",showLineNumbers:!0},"import axios from 'axios';\nimport { FETCH_USER } from './types';\n\nexport const fetchUser = () => async (dispatch) => {\n  const user = await axios.get('/api/current_user');\n  dispatch({ type: FETCH_USER, payload: user['data'] });\n};\n")),(0,i.kt)("p",null,"In the above file, we first need to import ",(0,i.kt)("inlineCode",{parentName:"p"},"axios"),". This is a network request library. We will use this to access the current user information."),(0,i.kt)("p",null,"The second line is the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," of action we want. In this case it is ",(0,i.kt)("inlineCode",{parentName:"p"},"FETCH_USER"),"."),(0,i.kt)("p",null,"The exported function then makes a call to the backend to see if there is a user logged in or not. Then the function ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatches")," the data with a type of ",(0,i.kt)("inlineCode",{parentName:"p"},"FETCH_USER")," and payload of the data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," call."),(0,i.kt)("p",null,"Dispatching in Redux means we are calling out to something called a ",(0,i.kt)("em",{parentName:"p"},"Reducer")," and updating the state of the application. The ",(0,i.kt)("em",{parentName:"p"},"Reducer")," needs to know the ",(0,i.kt)("em",{parentName:"p"},"type")," of call it is receiving so it can use the proper update technique and the payload it will use to set the state with. This state is not visible to the user unless we make it visible."),(0,i.kt)("p",null,"We will now create a Reducer."),(0,i.kt)("h3",{id:"creating-a-reducer"},"Creating a Reducer"),(0,i.kt)("p",null,"We need to create a directory and two files like we did for the actions. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"client -> scr")," directory, create a new directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"reducers"),". In this directory, please create the below two files:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer.js"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")),(0,i.kt)("p",null,"Please paste this code into the ",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=reducers/authReducer.js showLineNumbers",title:"reducers/authReducer.js",showLineNumbers:!0},"import { FETCH_USER } from '../actions/types';\nexport default function (state = null, action) {\n  switch (action.type) {\n    case FETCH_USER:\n      return action.payload || false;\n    default:\n      return state;\n  }\n}\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer")," file, we import the ",(0,i.kt)("em",{parentName:"p"},"type")," of ",(0,i.kt)("em",{parentName:"p"},"action")," we want to be able to use."),(0,i.kt)("p",null,"Next we define the function that handles these actions."),(0,i.kt)("p",null,"For this function, we are passing two arguments to it. The first is the initial state of our application. In this case we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". The second is the ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),". This will be passed to the reducer when we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," function in the application. The body of the function will have a switch statement with the different types of state we can return based on the action type."),(0,i.kt)("p",null,"The first case is if we detect ",(0,i.kt)("inlineCode",{parentName:"p"},"FETCH_USER"),", if the payload of the action is not empty we return the payload to the state of our application. Otherwise, we return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," case will return the default state we set or whatever the current state is if an un-defined action is sent."),(0,i.kt)("p",null,"The next thing we need to do is to combine our reducers so Redux is able to easily identify and use them."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file paste the below code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=reducers/index.js showLineNumbers",title:"reducers/index.js",showLineNumbers:!0},"import { combineReducers } from 'redux';\nimport authReducer from './authReducer';\nexport default combineReducers({\n  auth: authReducer,\n});\n")),(0,i.kt)("p",null,"We first import a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers"),". This allows to server multiple reducers to redux from a single entry point. Then we will import our ",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer"),"."),(0,i.kt)("p",null,"After the two imports, we need to export the ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"auth"),". The reason for doing this is to give a simpler name to this state as we access it throughout the frontend. We will now be able to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"authReducer")," state using the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," name instead. If we were to use a tool called ",(0,i.kt)("inlineCode",{parentName:"p"},"Redux DevTools"),", we would be able to see a sate called ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," in our application store."),(0,i.kt)("p",null,"This is all we need to setup for the actions and reducers of Redux. We now need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," and add functionality to allow asynchronous calls."),(0,i.kt)("h3",{id:"configuring-the-store"},"Configuring the Store"),(0,i.kt)("p",null,"Delete everything in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file and paste the below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=scr/index.js showLineNumbers",title:"scr/index.js",showLineNumbers:!0},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { Provider } from 'react-redux';\nimport { createStore, applyMiddleware } from 'redux';\n//add-line\nimport reduxThunk from 'redux-thunk';\n//add-line\nimport reducers from './reducers';\nimport './styles/cui-standard.min.css';\n\n//add-line\nconst store = createStore(reducers, {}, applyMiddleware(reduxThunk));\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);\n")),(0,i.kt)("p",null,"We need to import another library called ",(0,i.kt)("inlineCode",{parentName:"p"},"reduxThunk"),". This library is a ",(0,i.kt)("em",{parentName:"p"},"middleware")," and allows asynchronous Redux actions to take place. The second thing we need to import are the ",(0,i.kt)("em",{parentName:"p"},"reducers"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"import reducers from './reducers'")," works without specifying a file because Redux looks for a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reducers")," directory that should contain all the reducers."),(0,i.kt)("p",null,"Next we need to edit our ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),". Initially there was a function that returned an empty object. This became the initial state for the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),". Now we are passing ",(0,i.kt)("inlineCode",{parentName:"p"},"reducers")," to it, which is going to set the store default state to what is defined in the reducers."),(0,i.kt)("p",null,"Lastly we added ",(0,i.kt)("inlineCode",{parentName:"p"},"reduxThunk")," as a middleware. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/index.js")," we use an async function. Now it will work properly and be able to set the state."),(0,i.kt)("p",null,"Now the application is configured to use Redux."),(0,i.kt)("p",null,"We now need to get some running through the React application. We will import some functions we need and initiate the check for if the user is logged in."),(0,i.kt)("p",null,"Delete everything in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file and paste in the below code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=src/App.js showLineNumbers",title:"src/App.js",showLineNumbers:!0},"//add-line\nimport { useEffect } from 'react';\n//add-line\nimport { useDispatch } from 'react-redux';\n//add-line\nimport { fetchUser } from './actions/index';\nimport { BrowserRouter, Route, Routes } from 'react-router-dom';\nimport Header from './components/Header';\nimport ActiveEvents from './pages/ActiveEvents';\n\nfunction App() {\n  //add-line\n  const dispatch = useDispatch();\n  //add-line\n  useEffect(() => {\n    //add-line\n    dispatch(fetchUser());\n    //add-line\n  }, []);\n  function App() {\n    return (\n      <div className=\"\">\n        <Header />\n        <div className=\"\" style={{ marginTop: '7rem' }}>\n          <ActiveEvents />\n        </div>\n      </div>\n    );\n  }\n\n  export default App;\n}\n")),(0,i.kt)("p",null,"We first need to import ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," from react, ",(0,i.kt)("inlineCode",{parentName:"p"},"useDispatch")," from react redux, and our action ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser")," from the actions."),(0,i.kt)("p",null,"After that we need to initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDispatch"),". This will allow us to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser")," action in just a moment."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," allows us to make an asynchronous call in our code and then update some state. We use ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," because it will render any components that need to be updated after it has finished. In this ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),", we are calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser")," action. This will activate the Redux action and reducer, causing a call to our backend to fetch the user. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," is one of the first files loaded in a React project, it makes sense to fetch the user here."),(0,i.kt)("p",null,"We will come back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file in a little bit so we can refactor the returned code to use the Router. But first we will edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.js")," component to change the login and logout button after checking the user."),(0,i.kt)("h3",{id:"loginlogout-of-header"},"Login/Logout of Header"),(0,i.kt)("p",null,"We need to add some logic and refactor the header code to change the functionality of the Login and Logout button. First let's import the functions we need from Redux."),(0,i.kt)("p",null,"Delete everything in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.js")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scr/components")," directory and paste in the below code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=components/Header.js",title:"components/Header.js"},'import { useSelector } from \'react-redux\';\nimport { Link } from \'react-router-dom\';\nconst Header = () => {\n  const loggedIn = useSelector((state) => state.auth);\n  const renderLogin = () => {\n    switch (loggedIn) {\n      case null:\n        return (\n          <a className="header-item" href="/auth/cisco">\n            <span className="half-margin-right">Login</span>\n            <span className="icon-sign-in icon-size-20"></span>\n          </a>\n        );\n      case false:\n        return (\n          <a className="header-item" href="/auth/cisco">\n            <span className="half-margin-right">Login</span>\n            <span className="icon-sign-in icon-size-20"></span>\n          </a>\n        );\n      default:\n        return (\n          <a className="header-item" href="/api/logout">\n            <span className="half-margin-right">Logout</span>\n            <span className="icon-sign-in icon-size-20"></span>\n          </a>\n        );\n    }\n  };\n\n  return (\n    <header className="header">\n      <div className="container">\n        <div className="header-panels">\n          <div className="header-panel">\n            <a className="header__logo" href="http://www.cisco.com">\n              <span className="icon-cisco"></span>\n            </a>\n            <div className="header__title">DEVWKS-2122</div>\n          </div>\n          <div className="header-panel header-panel--center">\n            <div className="header-item">\n              <ul id="tabsheader" className="tabs">\n                {loggedIn && (\n                  <li id="tabsheader-1" className="tab active">\n                    <Link to={\'/events\'}>\n                      <div className="tab__heading">Active Events</div>\n                    </Link>\n                  </li>\n                )}\n              </ul>\n            </div>\n          </div>\n          <div className="header-panel header-panel--right">\n            <a className="header-item" href="/login">\n              <span className="half-margin-right">Log In</span>\n              <span className="icon-sign-in icon-size-20"></span>\n            </a>\n            {renderLogin()}\n          </div>\n        </div>\n      </div>\n    </header>\n  );\n};\n\nexport default Header;\n')),(0,i.kt)("p",null,"We first import ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," from Redux. This function allows us to access the state of the Redux store from anywhere without needing to do something called prop-drilling. Prop-drilling introduces a multitude of dependency issues in an application and can cause significant issues as a project gets larger."),(0,i.kt)("p",null,"We import ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," second from the React Router. This will tell React which page to show when it is selected."),(0,i.kt)("p",null,"Next is to access the ",(0,i.kt)("em",{parentName:"p"},"auth")," state with the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector"),". The ",(0,i.kt)("em",{parentName:"p"},"state")," that is used in the selector is the Redux store and we are accessing just the ",(0,i.kt)("em",{parentName:"p"},"auth")," state in the store. Then we store it as the ",(0,i.kt)("inlineCode",{parentName:"p"},"loggedIn")," variable."),(0,i.kt)("p",null,"We will create a ",(0,i.kt)("em",{parentName:"p"},"switch")," statement next. This statement will be used to render a different piece of HTML depending on the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"loggedIn")," variable."),(0,i.kt)("p",null,"We have created three cases, one for ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," (for ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," both link to ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/cisco")," and have the top right say ",(0,i.kt)("strong",{parentName:"p"},"Login"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," case returns a link with ",(0,i.kt)("inlineCode",{parentName:"p"},"Logout")," linking to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/logout")," meaning the user is logged in."),(0,i.kt)("p",null,"Now that our logic is setup, we need to edit the header to use the new logic. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," function of our component, we will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," a tag and replace it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderLogin")," function. We need to wrap it in curly braces, so it does not get treated as HTML."),(0,i.kt)("p",null,"After this we need to add some logic to the ",(0,i.kt)("em",{parentName:"p"},"Active Events")," tab. We do not want it to render if the user is not logged in. We will also make this ",(0,i.kt)("strong",{parentName:"p"},"a")," tag into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," so React can navigate with it."),(0,i.kt)("p",null,"That is all we need to do in the Header. If we login and logout of the application, we should see the text change between 'login' and 'logout' and the 'Active Events' tab will toggle as well."),(0,i.kt)("p",null,"Back in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js"),", we need to refactor the code to use the React Router and specify the routes for specific components."),(0,i.kt)("p",null,"Remove the code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file and paste in the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=src/App.js",title:"src/App.js"},"import { BrowserRouter, Route, Routes } from 'react-router-dom';\nimport { useEffect } from 'react';\nimport { useDispatch } from 'react-redux';\nimport { fetchUser } from './actions/index';\nimport Header from './components/Header';\nimport ActiveEvents from './pages/ActiveEvents';\n//add-line\nimport Login from './pages/Login';\n\nfunction App() {\n  const dispatch = useDispatch();\n\n  useEffect(() => {\n    dispatch(fetchUser());\n  }, []);\n\n  return (\n    <div className=\"\">\n      //add-line\n      <BrowserRouter>\n        //add-line\n        <Header />\n        //add-line\n        <div className=\"\" style={{ marginTop: '7rem' }}>\n          //add-line\n          <Routes>\n            //add-line\n            <Route path=\"/\" element={<Login />} />\n            //add-line\n            <Route path=\"/events\" element={<ActiveEvents />} />\n            //add-line\n          </Routes>\n          //add-line\n        </div>\n        //add-line\n      </BrowserRouter>\n      //add-line\n    </div>\n  );\n}\n\nexport default App;\n")),(0,i.kt)("p",null,"We can replace the entire ",(0,i.kt)("em",{parentName:"p"},"return")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file with the above code. This wraps the application with ",(0,i.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," allowing ",(0,i.kt)("inlineCode",{parentName:"p"},"Routes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Links")," to be used in any components wrapped in it. The browser router also integrates into the history of the browser. Now when changing from one route to another it will show up in the browser history."),(0,i.kt)("p",null,"Now for the main component of the application. For any components we want to be able to access using a route, we need to put it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Routes")," wrapper. Then create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," component with the path of the component and what component or element it will render."),(0,i.kt)("p",null,"Now we have a fully functioning full-stack application with WebEx OAuth and permission checking."))}c.isMDXComponent=!0}}]);