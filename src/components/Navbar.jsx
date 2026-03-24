import React from 'react'

const Navbar = () => {
  return (
    <section class="row justify-content-center">
            <div class="col-md-12">
                {/* a nav with navbar content */}
                <nav class="navbar navbar-expand-md bg-light">
                    <img src="images/logo.jpeg" alt="" width={60}/>
                    <a href="" class="navbar-brand text-danger">Vinywaji Proper</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse" style={{ textAlign: 'right' }}>
                        <div class="navbar-nav" >
                            <a href="/" class="nav-link">Home</a>
                            <a href="/addproduct" class="nav-link">Add product</a>
                            <a href="/signin" class="nav-link">Sign in</a>
                            <a href="/signup" class="nav-link">Sign up</a>
                            
                        </div>
                    </div>
                     <img src="images/logo.jpeg" alt="" width={60}/>
                </nav>
            </div>
        </section>
  )
}

export default Navbar