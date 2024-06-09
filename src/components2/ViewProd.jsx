import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewProd = () => {


    const [prod, changeProduct] = useState({"products": []})
    const fetchData = () => {
        axios.get("https://dummyjson.com/products").then(
            ( response ) => {
    console.log(response.data)
    changeProduct(response.data)

}
        ).catch ().finally()
    }

useEffect(() => { fetchData() }, [])
return (
    <div>





        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            {
                                prod.products.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                            <div class="card">


                                                <img src={value.images} class="" alt="..." />
                                                <div class="card-body">

                                                    <p class="card-text">{value.id}</p>
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.price}</p>





                                                </div>
                                            </div>

                                        </div>
                                    }
                                )
                            }

                            {/* 
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                    <div class="card">


                                        <img src={value.urlToImage} class="" alt="..." />
                                        <div class="card-body">

                                            <p class="card-text">{value.id}</p>
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.description}</p>
                                            <p class="card-text">{value.price}</p>





                                        </div>
                                    </div>

                                </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ViewProd