import axios from "axios"
import React,{useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"

const Getproduct = () => {
    // declare our states here 
    const navigate = useNavigate ()
    const [loading,setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    // function to get products 
    const getproducts = async () => {
        setLoading("Loading products...")

        try{
            const response = await axios.get ("http://peterhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        }catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    // call the function 
    useEffect( () => {
        getproducts ()
    }, [])

    console.log(products);
    const imagepath = "http://peterhiggs.alwaysdata.net/static/images/"

    return(
        <div className="row">
            {/* Carousel goes here */}
            <Carousel/>

            <h1 className="text-dark text-center">Available products</h1>
            {/* Bind the states */}
            <h2 className="text-info">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
            {/* map here */}
            {products.map(singleproduct => (

                <div className="col-md-3  mb-4">
                    <div className="card shadow h-100 btn btn-warning">

                {/* image goes here */}
                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"250px", objectFit:"cover"}}/>
                <div className="card-body">
                    <h2 className="text-info">{singleproduct.product_name}</h2>
                    <p>{singleproduct.product_description}</p>
                    <b className="text-warning">Ksh {singleproduct.product_cost}</b><br />
                    <button className="btn btn-success w-80" onClick={()=>navigate("makepayment", {state : {singleproduct}})}>Purchase now</button>
                </div>
                    </div>      
            </div>
            ))}
        </div>
    )
}
export default Getproduct