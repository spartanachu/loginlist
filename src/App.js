import {BrowserRouter,Route, Routes,Link} from "react-router-dom"
import {useState} from "react"
import Signup from "./Components/Signup"
import Loginapps from "./Components/login";
import Landingpage from "./Components/Landingpage";

function App() {
  const [userpass,setusername]=useState([{
    username:"jhon",
    password:"123"},
    {
        username:"achu ",
        password:"123"
}])

  return (
  <>

  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Loginapps userpass={userpass} setusername={setusername}/>}></Route>
  <Route path="/signup" element={<Signup userpass={userpass} setusername={setusername}/>}></Route>
  <Route path="/landingpage" element={<Landingpage/>}></Route>
  </Routes>
  </BrowserRouter> 
  </>
  );
}

export default App;
