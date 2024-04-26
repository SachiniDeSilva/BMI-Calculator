import "./App.css";
import React,{useState} from "react";
function App() {



const [weight,setWeight] = useState(0);
const [height,setHeight] = useState(0);
const [bmi, setBmi] =useState('');
const[message,setMessage] =useState('');

//logic

let calcBmi =(e)=> {
e.preventDefault(); //stay long
if (weight === 0 || height === 0) {
  alert('please enter a valid value');
  
}

else{
  let bmi = (weight/(height*weight)*703)
  setBmi (bmi .toFixed(1));




  if (bmi<25) {
    setMessage('You are underweight');
    
  }
  else if (bmi>=25 && bmi <30){
    setMessage('You are a healthy')
  }
  else{
    setMessage('you are overWeight')
  }
}
}

//reload

let reload =() => {
  window. location.reload()
}

  return (
    <div className="app">
     <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>
            Weight(lbs)
          </label>
          <input type="text" placeholder="Enter weight value" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div>
          <label>
            Height(in)
          </label>
          <input type="text" placeholder="Enter height value" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </div>
        <div className="center">
          <h3>
            Your BMI Value is:{bmi}
          </h3>
          <p>
            {message}
          </p>
        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
