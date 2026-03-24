import axios from "axios"
import React, { useState } from "react"
import { Navigate } from "react-router-dom"

const Addproduct = () => {

    // declare the states here 
    const[product_name, setProduct_Name] = useState("")
    const[product_description, setProduct_Description] = useState("")
    const[product_cost, setProduct_Cost] = useState("")
    const[product_photo, setProduct_photo] = useState("")

    // define 3 states for posting data 
    const[loading,setLoading] = useState("")
    const[success,setSuccess]=useState("")
    const[error,setError] =useState("")

    // function to handle submit 
    const handlesubmit = async(e) => {
        e.preventDefault()
        setLoading("Please wait...")
        
        // create digital envelope
        const formdata = new FormData ()
        // append/add 
        formdata.append("product_name", product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)

   try {
        const response =await axios.post("http://peterhiggs.alwaysdata.net/api/addproduct",formdata)
        setSuccess(response.data.message)
        setLoading("")
        // If product is added successfully save data to local storage

    
    }catch (error){
    }
}

    return(
        <div className="row justify-content-center mt-2">
            <div className="col-md-8 card shadow p-4">
            <h1 className="text-info">Add Product</h1>
            
            {/* bind the states  */}
             <h2 className="text-warning">{loading}</h2>
             <h2 className="text-success">{success}</h2>
             <h2 className="text-danger">{error}</h2>

            <form action="" onSubmit={handlesubmit}>
            
            <input type="text" placeholder=" Enter product name" className="form-control" onChange={(e) => setProduct_Name(e.target.value)}/><br />
            <textarea name="" id="" className="form-control" placeholder="Enter product description" onChange={(e) => setProduct_Description(e.target.value)}></textarea><br />
            <input type="number" className="form-control" placeholder="Enter product cost 💰" onChange={(e)=> setProduct_Cost(e.target.value)}/><br />
            <input type="file" className="form-control" placeholder="Choose photo" accept="image/*" onChange={(e)=> setProduct_photo(e.target.files[0])}/><br />
            <button className="btn btn-primary w-100">Add product</button>

            </form>   
            </div>        
        </div>
    )
}
export default Addproduct