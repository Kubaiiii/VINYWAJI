import React from 'react'

const Carousel = () => {
    return (
       <section class="row">
            <div class="col-md-12">
                <div id="carouselExampleDark" class="carousel carousel-dark slide  " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                          <img src="images/party.jpeg" class="d-block w-100 rounded" alt="" height={400} />
                            <div class="carousel-caption d-none d-md-block">
                                <h4 class="text-white">Party with Friends</h4>
                                <p class="text-white">Fuel the night with every sip—because no great party ever started with an empty glass. 🥂
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="images/workout.jpeg" class="d-block rounded w-100" alt="..." height={400}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h4 class="text-white">Workout Energisers</h4>
                                <p class="text-white">Power every rep, refresh every breath—drink smarter, train harder, and feel the difference in every drop. 💧🔥
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/child.jpeg" class="d-block rounded w-100" alt="" height={400}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h4 class="text-black">Memorable Parties</h4>
                                <p class="text-black">Make their big day sparkle with every sip—fun, flavor, and smiles bottled just for your child's big day! 🎉🥤</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousel