import { useLocation, useNavigate } from "react-router-dom"

function Landingpage()
{
    const navigate=useNavigate()
    const data=useLocation()
    console.log(data.state.username)
    function handlelogout()
    {
        navigate("/")
    }
    return(
    <>
    <h1>
        Landing {data.state.username}
    </h1>
        <div className="my-16">
    <button className="border bg-green-500 border-black p-1 hover:bg-red-200" onClick={handlelogout}>Logout</button>
    </div>
    </>
    )
}

export default Landingpage