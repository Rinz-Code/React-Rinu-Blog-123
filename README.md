# How to create React app

---

```bash
npx create-react-app

# npx comes with node js
```

### Delete unwanted files from src

- like App.test.js {we are not testing it right now}
- logo.svg

### remove deleted things imports

## What is a Component

---

- component in react is the main thing.everything we see will be component like widgets in flutter.
- component is function With name starting with Capital letter like classes
- component return html like syntax thing.which is JSX
- JSX and html have lit bit differences like class atribute in html and className in JSX

## Using Dynamic values

---

1. make variable

```js
const variable = "";
```

2. call it in Jsx

```jsx
<div className="App">
  <div className="content">
    <h1>{variable}</h1>
  </div>
</div>
```

### or

1. you can pass any valid javascript to JSX

```jsx
<div className="App">
  <div className="content">
    <h1>{10 + 2}</h1>
    <p>{"hello"}</p>
    <p>{[1, 2, 3, 4, 5]}</p>
    <p>{math.random() * 10}</p>
  </div>
</div>
```

### Limits

1. can't pass boolean
2. can't pass objects

## create Component

---

1. create a file with component name install 'simple react snippet' to vs code,type 'sfc' then type your component name return jsx

## use new Component in APP.js

---

1. import Navbar.js with

```js
import Navbar from "./Navbar";
```

2. use Component as tag

```jsx
<div className="App">
  <Navbar />
  <div className="content">
    <h1>{title}</h1>
  </div>
</div>
```

or like

```jsx
<div className="App">
  <Navbar></Navbar>
  <div className="content">
    <h1>{title}</h1>
  </div>
</div>
```

## CSS to React

---

```js
import "./index.css";
```

is really adding react to css sorry in reverse
css - react

we want to add this to it

but we only need a css for all we can add all our css to it ok for now
so we only want to use css in index.js file. So we can get global css which applied to all component

if we want to use style atrribute
we can like this

```jsx
<div
  className="App"
  style={{
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: "8px",
  }}
>
  <Navbar />
  <div className="content">
    <Home />
  </div>
</div>
```

we can pass stylle as dynamic value object
diffs
property color is same
here we used
backgroundColor instead of background-color
borderRadius instead of border-radius
because we can't use '-' in javascript
in javascript - means subtract
so we use camelcase

## how to do onclick such functions

1. create function in component or?
2. add this to the onclick of jsx tag

```js
const handleClick = () => {
  console.log("clicked,It");
};
```

```jsx
<button onClick={handleClick}>Click here</button>
```

## parameter to functions

---

1. create function with parameter
2. make anonymous function to onclick
3. call our function inside anonymous function

```js
const handleClick = (name) => {
  console.log("clicked,by ", name);
};
```

```jsx
<button
  onClick={() => {
    //code here
  }}
>
  Click here
</button>
```

```jsx
<button
  onClick={() => {
    handleClick("Fish");
  }}
>
  Click here
</button>
```

or

```jsx
<button onClick={() => handleClick("Fish")}>Click here</button>
```

we can event 'e' view the these like

```jsx
const handleClick = (name, e) => {
  console.log("clicked,by ", name, e);
};
<button onClick={(e) => handleClick("Fish", e)}>Click here</button>;
```

and

```js
const handleClick = (e) => {
  console.log("clicked,It", e.target);
};
```

```jsx
<button onClick={handleClick}>Click here</button>
```

## | state | useState() hook |

---

##### states the changing values, if we have values that changes continuesly we want o use states,without state we can change the value of the variable normally but we can't apply it into template it is the drowback but we can use states for it.It simple

#### if we make changes as we did normally react will not 'react' to it we want to make react 'reacts' to this thing.So wee want to make it reactive

#### so this we use a function called 'useState' it is a react hook

#### react hook is special type function that does a certain job

#### react hooks start with 'use'

#### useState hook gives a way which we can make reactive value and also provides as a way we can change the value

#### how to use useState

create a variable with useState like this

```js
const [name, setName] = useState("Name"); // create variable and setName function which is used to change the value
```

use setName

```js
const handleClick = () => {
  setName("New Name"); // change value here with setName
};
```

So now when the value changes the template rerenders
and we get the new value
we can use state for any data types

## outputting List

---

you know how react outputed the list it make string with all content in string
we don't want to do that we have to make loop that gives a nice looking template
'for me like in django for loop in template'

how do we loop through the list for that we uses map in javascript which helps to loop as we want

value we want to loop

```js
    const [blogs,setBlog] = useState([

        { title: 'My new website', body: 'lorem ipsum...', author: 'mimport BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlog] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null)
    useEffect(()=>{
       ario', id: 1 },

        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },

        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

    ])
```

```jsx
<div className="home">
  {blogs.map((blog) => (
    <div className="blog-preview" key={blog.id}>
      <h2>{blog.title}</h2>
      <p>Written by {blog.author}</p>
    </div>
  ))}
</div>
```

key atribute must be unique so id must be unique so only the react know these

## Props

---

here know we have this code

```jsx
<div className="home">
  {blogs.map((blog) => (
    <div className="blog-preview" key={blog.id}>
      <h2>{blog.title}</h2>
      <p>Written by {blog.author}</p>
    </div>
  ))}
</div>
```

we want to use this more than one time how we do it copy paste?
no we can create a component for this and pass values we needed to view like
this

##### pass value from parent componenet

```jsx
<div className="home">
  <BlogList blogs={blogs} />
</div>
```

##### take it from our child component

```jsx
const BlogList = (props) => {
    const blogs = props.blogs;

```

or

```jsx
const BlogList = ({blog}) => {
    const blogs = props.blogs;

```

#### props is way to pass data from parent component to child component .

#### we have blogs in the Home component not in BlogList we used props to give 'blogs' to the BlogList ok..

#### we can pass functions as props create function and pass like normally we do..

## | useEffect |

---

#### It is used to fetch data from Api

#### we can use it for authentation system

#### we can use django api fetching with this

#### this function calls when page renders

#### page renders when we change state and other things

```js
useEffect(() => {
  console.log("use effect ran");
}, []);
```

this with empty dependency list will only run only onetime

```js
useEffect(() => {
  console.log("use effect ran");
}, [name]);
```

this will only change when name value changes

## creating a json-server

#### crating a json server is we only need to create a file and type this terminal

```bash
npx json-server --watch pathtofile/filename.json --port 8000
```

## fetching data

---

### to fetch data from endpoint we want to use the 'fetch' in js and we want it to be in a useEffect hook

it is like this

```js
useEffect(() => {
  fetch("http://localhost:8000/blogs")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}, []);
```

## conditional templating

---

### look this line of code

```jsx
{
  blogs && (
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
  );
}
```

what does this do the 'blogs' thing is not null
if not it renders this template
if the thing in left is true or exist then only it get outputted

```js
setTimeout(() => {
  // add code here to add more time to do this
});
```

## handling fetch errors

---

we can use .catch()

```js
.then(data =>{
          console.log(data);
          setBlog(data);
})
.catch(err =>{
  console.log()
});
```

after .then() s it will show our error, this will work if the fetching server is went down or not working

what if fetching link incorrect

```js
.catch()
```

will not show it

so we want to use

in first .then() add this

```js
        .then(res =>{
          if (!res.ok){// if res.ok is not true it will become throw a error we made
            throw Error('could not fetch data for that resource');
          }
          return res.json();
        })
```

### this home page component will show error if it has any error

```jsx
const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlog(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading.......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};
```

## Custom Hook

---

#### we want to fetch the data in somany places not only in home component if we copy paste it is not a good thing it is not a effecient code

#### so for Fetching data we can create a hook with name 'useFetch'

#### the hooks in react needed to be started with 'use' , so we named like that

#### how do we create it

1. create a file with name of hook, now it is 'useFetch.js'
2. create function with same name
3. add the fetching things we needed

```js
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};
```

this is now greatly superly reusable . we only needed to pass url to it and it gives as back good things

```js
// calling it from home component
const { data: blogs, isPending, error } = useFetch(
  "http://localhost:8000/blogs"
);
// data: blogs means give data and call it blogs now
```

## Routing in react

---

#### other website not like react do this

1. first when we enter a page ,page ask the server for that page html and gives back it
2. if we click on a link like 'contact'
3. it will ask the server for it's html also if we go another page we call for another page
4. so on and we call server somany times
   this is in normall page

#### in react website (SPA's)

1. first when we enter the a page , page ask the server for that page html and server gives back the page html and gives react files also
2. the taken html would be first empty one react injects the html the page want .
3. if we go to contact page react block it from going to that route and injects the contact pages needed files
4. so we only need to call a server ones
   it so simply and onetime in react

for that we want to install it

```bash
npm install react-router-dom@5
# for version 5
```

import these

```js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
```

#### we do this in App.js

Now we want to saround our all our with Router component
then only we can call Router in in all component

```jsx
// wrap router component
<Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Home />
    </div>
  </div>
</Router>
```

### switch in router

#### wrap all element which is only needed show in route in one url

#### like we want show contact page when we are in 'url/contact'

#### not needed show when route is 'url/about'

#### like so,we don't want to wrap navbar because we need it in all the pages

### we then make the routes

### to make route we want to use

```jsx
<Route path="/">
  <Home />
</Route>
<Route path="/contact">
  <Contact />
</Route>
```

Route component need the path value
if we are that path we get that element

jsx with Router,Swith,Route

```jsx
<Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </div>
</Router>
```

## Exact match route

in this route

if we go to / and /create it will only now show home

```jsx
<Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </div>
</Router>
```

because react check for the matches from top to down
it will get / as we now check for /create s things
it / is in /create so it will show up home page for /create also

to stop this from doing these

we want to add a 'exact' keyword to Route of /

```jsx
<Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </div>
</Router>
```

this is will work nicely

## Router Links

WE want to use link component
to get SPA's functionalities

we want to replace it with 'a' tag

it is in Navbar.js

import it first

```js
import { Link } from "react-router-dom";
```

replace 'a' tag with 'Link' component

```jsx
                <a href="/">Home</a>// a tag
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>New Blog</a> // to
                <Link  to="/">Home</Link>// Link COmponent
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>New Blog</Link>
```

## useEffect Cleanup

when we run the app we seen a error in console it is a problem with useEffect in useFetch cstom hook
