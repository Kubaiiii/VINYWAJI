import axios from "axios"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"


const Mpesapayment = () => {

  const {singleproduct} = useLocation().state || {}
  const imagepath = "http://peterhiggs.alwaysdata.net/static/images/"

  // declare your states here 
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState ("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // Function to make payment
  const handlesubmit = async (e) => {
    e.preventDefault ()
    setLoading ("Please wait...")

    // create empty digital envelope
    const formdata = new FormData ()
    // append/add 
    formdata.append("phone", phone)
    formdata.append("amount", singleproduct.product_cost)

    try{
      const response = await axios.post("http://peterhiggs.alwaysdata.net/api/mpesa_payment", formdata)
      setSuccess(response.data.message)
      setLoading("")
    }
    catch(error){
      setError("Something went wrong")
      setLoading("")
    }
  }

  return (
    <div className="row justify-content-center">
      <h1 className="text-success text-center">Make Payment - Lipa na Mpesa</h1>

      <div className="card p-4 shadow col-md-6 justify-content-left">                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"300px", objectFit:"contain"}}/>


        <div className="card-body ">
          <h1 className="text-info ">{singleproduct.product_name}</h1>
          <p>{singleproduct.product_description}</p>
          <b className="text-danger">Ksh {singleproduct.product_cost}</b><br />

          {/* Bind the states */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>
                  
          <form action="" onSubmit={handlesubmit}>
            <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter phone  +254 xxx xxx xxx 📞"/><br />
            <button type="submit" className="btn btn-success w-100">Make payment</button>
          </form>
        </div>
        
      </div>

    </div>
  )
}
export default Mpesapayment
