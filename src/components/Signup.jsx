import axios from "axios"
import React, {useState} from "react"
import { Link } from "react-router-dom"

const Signup = () => {

    // declare our states here
    const[username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    // 3 states of posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        // create empty digital envelope to store uder input 
        const formdata = new FormData()
        // append/add 
        formdata.append("username", username)
        formdata.append("email", email)
        formdata.append("password", password) 
        formdata.append("phone", phone)

        try {
            const response = await axios.post("https://peterhiggs.alwaysdata.net/api/signup", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    
    return(
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4">
                <h1>Sign Up</h1>
                {/* bind the states */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter Username 👤" onChange={(e)=>setUsername(e.target.value)}/><br />
                    <input type="email" className="form-control" placeholder="Enter Email 📧"  onChange={(e) => setEmail(e.target.value)}/><br />
                    <input type="password" className="form-control" placeholder="Enter password🔐"  onChange={(e) => setPassword(e.target.value)}/><br />
                    <input type="tel" className="form-control" placeholder="Enter Phone 📞"  onChange={(e) => setPhone(e.target.value)}/><br />
                    <button type="submit" className="btn btn-primary w-100">Sign Up ✅</button><br /><br />
                    <p><b>Already have an account?</b> <Link to="/signin">Sign In 🚀</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signup