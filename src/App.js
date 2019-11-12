import React, {useState, useEffect} from 'react';
import SingUp from './SingUp';
import ContactUs from './ContacUs';

function App() {
  const [count, setCount] = useState(0)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showContactUs, setShowContactUs] = useState(false)

  useEffect(()=>{
    console.log('render')
  },[])

  return (
    <div>
      <h1>Sample App</h1>
      <button onClick={()=> setCount(count+1)}>Increment {count}</button>

      <button onClick={()=> setShowSignUp(!showSignUp)}> { showSignUp ? "Hide" : "Show"} SignUp</button>
      { showSignUp && (<SingUp/>) }

      <button onClick={()=>setShowContactUs(!showContactUs)}>{ showContactUs ? "Hide" : "Show"} ContactUs</button>
      {showContactUs && (<ContactUs/>)}
    </div>
  );
}

export default App;
