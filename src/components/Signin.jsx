import { Link, useNavigate } from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"

const Signin = () => {
let navigate = useNavigate()

// declare the two states here 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

/* states for posting data  */
const[loading, setLoading] = useState("")
const [success, setSuccess] = useState("")
const [error, setError] = useState("")


// function to handle submit 
const handlesubmit = async (e) => {
    e.preventDefault ()
    setLoading("Please wait...")

    // create empty digital envelope
    const formdata = new FormData()
    // append/add 
    formdata.append("email", email)
    formdata.append("password", password)
    
    try {
        const response = await axios.post("http://peterhiggs.alwaysdata.net/api/signin", formdata)
        setSuccess(response.data.message)
        setLoading("")

        // if login/signin is successful, we save user to local strorage
        // NB: redirect user to home page(get products)
        if (response.data.user){
            // login success
            localStorage.setItem("user", JSON.stringify(response.data.user))
            // redirect the user to homepage
            navigate("/") 
        } else{
            // login failed 
            setSuccess(response.data.message)
        }
    }catch (error) {
        setError(error.message)
        setLoading("")
    }
}


    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4">
                <h1>Sign In</h1>

                {/* bind  the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action=""  onSubmit={handlesubmit    }>
                <input  type="email" placeholder="Enter Email 📧"className="w-100 form-control" onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="password" placeholder="Enter Password 🔐" className="form-control w-100" onChange={(e) => setPassword(e.target.value)}/><br />
                <button className="btn btn-primary lg w-100">Sign In 🚀</button><br /><br />
                <p>Don't have an account?<Link to = "/signup">Sign Up ✅</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signin