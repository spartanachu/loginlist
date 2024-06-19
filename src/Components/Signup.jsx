import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){
    const navigate=useNavigate()
    const userpass=props.userpass
    const setusername=props.setusername
    const [uinput,setuinput]=useState()
    const [pinput,setpinput]=useState()
    function handleuinput(event)
    {
        setuinput(event.target.value)
    }
    function handlepinput(event)
    {
        setpinput(event.target.value)
    }
    function handleadd()
    {
        setusername([...userpass,{username:uinput,password:pinput}])
        console.log(userpass)
        navigate("/")
        setuinput("")
        setpinput("")
    }
    return( <>
        <div className="bg-black p-10">
        <div className="bg-[#E7F2FD] m-5 p-5 border rounded-md">
        <div className="m-5">
        <h1 className="text-2xl font-bold">Hey Hi!</h1>
        <p>you can signup here:)</p>
        </div>
        <div className="m-5">
            <input onChange={handleuinput} className="border border-black p-1" type="text" placeholder="UserName" /><br/><br/>
            <input onChange={handlepinput} className="border border-black p-1" type="text" placeholder="Password" /><br/><br/>
            <input className="border border-black p-1" type="text" placeholder="Confirm Password" /><br/><br/>
            <button onClick={handleadd} className="border border-black p-2 bg-orange-500 hover:bg-green-300">SignUp</button>
        </div>
        <div className="m-5">
            <p>Don't have an account? <a className="underline" href="/">Login</a></p>
        </div>
        </div>
        </div>
        </>)
}

export default Signup