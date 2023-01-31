import React, {useState} from "react"
import "./App.css"
import { Button } from "semantic-ui-react";


function App(){

  const [count, setCount] = useState(0)
  return(
    
    <div className="App">
      <div className="main">
      <header><h1><u>Counter app</u></h1></header>
      <h2>Value of count is:  {count}</h2><br/>
      <div className="btnn">
      <button class="ui button" onClick={() => (count <0 ? "" : setCount(count + 1))}>Increment</button>
      <button class="ui button" onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrement</button>
      </div><br/>
      <h3>Done by:- Shruti . 12012427 </h3>
      </div>
      </div>
  );
}
export default App;


