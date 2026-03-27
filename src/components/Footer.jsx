import React from 'react'

const Footer = () => {
  return (
    <div>
               <section class="row bg-warning p-4">
            {/* <!-- child1 --> */}
            <div class="col-md-4 text-white text-center">
                <h2>About us</h2>
                <p>Tumaini collection offers you everything you may need for your daiily luxurious living. We offer you
                    luxury paired up with affordability to ensure everyone gets a small piece of excellent living.</p>
            </div>
            {/* <!-- child2 --> */}
            <div class="col-md-4 text-center text-white">
                <h2>Contact us</h2>
                <form action="">
                    <input type="email" placeholder="Enter your e-mail" class="form-control"/> <br/>
                    <textarea name="" id="" class="form-control" placeholder="Leave comment"></textarea><br/>
                    <input type="submit" value="Send message" class="btn btn-outline-danger"/>
                </form>
            </div>
            {/* <!-- child3 --> */}
            <div class="col-md-4 text-center text-white">
                <h2>Stay connected</h2>
                <a href="https://facebook.com">
                    <img src="images/fb.png" alt="facebook"/>
                </a>
                <a href="https://instagram.com">
                    <img src="images/in.png" alt="ig"/>
                </a>
                <a href="https://x.com">
                    <img src="images/x.png" alt="x"/>
                </a>
                <p>Contact us on any platform to buy your goods today!!</p>
            </div>
        </section>
    </div>
  )
}

export default Footer