import React, {useState, useEffect} from 'react';
import SingUp from './forms/SingUp';
import ContactUs from './forms/ContacUs';
import usePost from './fetch/usePost'

function App() {
  const [count, setCount] = useState(0)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showContactUs, setShowContactUs] = useState(false)  

  useEffect(()=>{
    console.log('render')

    
  },[])

  const { loading, data, error} = usePost(count)

  return (
    <div>
      <h1>Sample App</h1>
      <button onClick={()=> setCount(count+1)}>Post id: {count}</button>

      <button onClick={()=> setShowSignUp(!showSignUp)}> { showSignUp ? "Hide" : "Show"} SignUp</button>
      { showSignUp && (<SingUp/>) }

      <button onClick={()=>setShowContactUs(!showContactUs)}>{ showContactUs ? "Hide" : "Show"} ContactUs</button>
      {showContactUs && (<ContactUs/>)}
    </div>
  );
}

export default App;
