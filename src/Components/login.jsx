import {useState} from "react"
import { useNavigate } from "react-router-dom"
function Loginapps(props){
    const userpass=props.userpass
    const setusername=props.setusername
    const [uinput,setuinput]=useState()
    const[pinput,setpinput]=useState()
     const [ruser,setruser]=useState(true)
     const navigate=useNavigate()

    function handleuinput(event)
    {
        setuinput(event.target.value)
    }
    function handlepinput(event)
    {
        setpinput(event.target.value)
    }

    function handlecheck()
    {
        var userfound=false
        userpass.forEach(function(item)
        {
            if(item.username === uinput && item.password===pinput)
                {
                    console.log("login sucess")
                    navigate("/landingpage",{state:{username:uinput}})
                    setruser(true)
                    userfound=true
                    console.log(ruser)
                }
                // else{
                //     console.log("login failed")
                //     setruser(false)
                //     console.log(ruser)
                // }
        }
        )
        if(userfound===false)
            {
                console.log("login Success")
                setruser(false)
            }
    }
    return(
        <>
        <div className="bg-black p-10">
        <div className="bg-[#E7F2FD] m-5 p-5 border rounded-md">
        <div className="m-5">
        <h1 className="text-2xl font-bold">Hey Hi!</h1>
        {ruser?<p>Manage you activites after you login:)</p>:<p className="text-red-500">first Sign in before login</p>}
        </div>
        <div className="m-5">
            <input  onChange={handleuinput} className="border border-black" type="text" placeholder="UserName" /><br/><br/>
            <input  onChange={handlepinput} className="border border-black" type="password" placeholder="Password" /><br/><br/>
            <button onClick={handlecheck} className="border border-black p-1 bg-sky-500">Login</button>
        </div>
        <div className="m-5">
            <p>Don't have an account? <a className="underline" href="./signup">SignUp</a></p>
        </div>
        </div>
        </div>
        </>
    )
}
export default Loginapps