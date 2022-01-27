import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import st_cake from "./images/strawberry_cake.jpg"

const ProductList = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-lg">
                    <Link className="navbar-brand" to={`/`}>
                        <img src="images/icon.png" width="50" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to={`/`}>Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={`/dashboard`} className="nav-link" href="#">Dashboard</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={`/register`} className="nav-link" href="#">Sign Up</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={`/login`} className="btn btn-success px-4" href="#">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-lg bawah-nav">

                <div id="carouselExampleCaptions" className="carousel slide mt-2" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item carousel-custom active">
                            <img src="images/banner3.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-custom">
                            <img src="images/banner2.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-custom">
                            <img src="images/banner.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <h2>New Products</h2>
                    </div>
                </div>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-6 col-md-4 col-lg-3 mt-2 " key={product.id}>
                            <div className="card">
                                <div className="products-thumbnail">
                                    <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-1" style={{ backgroundImage: `url(${st_cake})` }}>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.rentangHarga}</p>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-1"
                                        className="btn btn-primary">Preview</button>
                                </div>
                            </div>
                            <div className="modal fade" id="modalProducts-1" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Strawberry Cake</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="modal-thumbnail">
                                                        <div className="products-image" style={{ backgroundImage: `url(${st_cake})` }}>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <p className="card-text">{product.rentangHarga}</p>
                                                        <p className="card-text">{product.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6 ms-auto align-self-end">
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p>Follow us on</p>
                                    <a href="">
                                        <img src="images/ig.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/fb.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/twitter.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p className="pt-4 pb-2">
                                        Bikin apa aja, bisa
                                    </p>
                                    <p className="text-muted mb-5">
                                        &copy; 2022 Mukbang | Food Journal
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ProductList
