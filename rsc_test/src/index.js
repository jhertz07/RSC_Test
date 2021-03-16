import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function IntHexAddition(props) {

  // manually compute hex addition
  function add(val1, val2) {
    var sum = "";
    var r = 0;
    var a = "", b = ""
  
    if (val1.length < val2.length) {
      a = val1;
      b = val2;
    }
    else {
      a = val2;
      b = val1;
    }
    a = a.split("").reverse()
    b = b.split("").reverse()
  
    // Sum a and b digits
    for (var i = 0; i < b.length; i++) {
      var t = (((i < a.length) ? parseInt(a[i], 16) : 0) + parseInt(b[i], 16) + r);
      
      sum += (t % 0x10).toString(16);
  
      r = t < 0x10 ? 0 : Math.floor(t / 0x10);
    }
    // Append the last remainder
    if (r > 0) {
      sum += r;
    }
  
    sum = sum.split("").reverse()
    sum = sum.length > 0 ? sum.join("") : "0";

    return sum
  }

  return (
    <span>
      {add(props.val1, props.val2)}
    </span>
  );
}

function App() {

  const [val1, setVal1] = useState("")
  const [val2, setVal2] = useState("")

  return (
    <div>
      <div>Enter 2 integers in hex</div> 
      <div>
        <input onChange={event => setVal1(`${event.target.value}`)}></input>
      </div>
      <div>
        <input onChange={event => setVal2(`${event.target.value}`)}></input>
      </div>
      <div>
        <div>
          Result:
        </div>
        <div>
          <IntHexAddition val1={val1} val2={val2} />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);