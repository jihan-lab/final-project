import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode"


import st_cake from "./images/strawberry_cake.jpg"
import burger from "./images/burger.jpg"
import cup_cake from "./images/cup_cake.jpg"
import donuts from "./images/donuts.jpg"
import nasi_goreng from "./images/nasi_goreng.jpg"
import steak_panggang from "./images/steak_panggang.jpg"

const ProductList = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const direct = useNavigate()
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
               direct("/")
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/api/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategori
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Minuman</a></li>
                                    <li><a className="dropdown-item" href="#">Kue</a></li>
                                    <li><a className="dropdown-item" href="#">Desert</a></li>
                                    <li><a className="dropdown-item" href="#">Manisan</a></li>
                                </ul>
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
                    <div className="col-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="products-thumbnail">
                                <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-1" style={{ backgroundImage: `url(${st_cake})` }}>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Strawberry Cake</h5>
                                <p className="card-text">Rp. 2.000.000,-</p>
                                <p className="card-text">Level : Easy </p>
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
                                                    <h5 className="card-title">Strawberry Cake</h5>
                                                    <p className="card-text">Rp. 2.000.000,-</p>
                                                    <p className="card-text">Level : Easy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="products-thumbnail">
                                <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-2" style={{ backgroundImage: `url(${burger})` }}>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Burger</h5>
                                <p className="card-text">Rp. 2.000.000,-</p>
                                <p className="card-text">Level : Easy </p>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-2"
                                    className="btn btn-primary">Preview</button>
                            </div>
                        </div>
                        <div className="modal fade" id="modalProducts-2" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Burger</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="modal-thumbnail">
                                                    <div className="products-image" style={{ backgroundImage: `url(${burger})` }}>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Burger</h5>
                                                    <p className="card-text">Rp. 2.000.000,-</p>
                                                    <p className="card-text">Level : Easy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="products-thumbnail">
                                <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-3" style={{ backgroundImage: `url(${cup_cake})` }}>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Cup Cake</h5>
                                <p className="card-text">Rp. 2.000.000,-</p>
                                <p className="card-text">Level : Easy </p>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-3"
                                    className="btn btn-primary">Preview</button>
                            </div>
                        </div>
                        <div className="modal fade" id="modalProducts-3" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Cup Cake</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="modal-thumbnail">
                                                    <div className="products-image" style={{ backgroundImage: `url(${cup_cake})` }}>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cup Cake</h5>
                                                    <p className="card-text">Rp. 2.000.000,-</p>
                                                    <p className="card-text">Level : Easy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="products-thumbnail">
                                <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-4" style={{ backgroundImage: `url(${nasi_goreng})` }}>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Nasi Goreng</h5>
                                <p className="card-text">Rp. 2.000.000,-</p>
                                <p className="card-text">Level : Easy </p>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-4"
                                    className="btn btn-primary">Preview</button>
                            </div>
                        </div>
                        <div className="modal fade" id="modalProducts-4" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Nasi Goreng</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="modal-thumbnail">
                                                    <div className="products-image" style={{ backgroundImage: `url(${nasi_goreng})` }}>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Nasi Goreng</h5>
                                                    <p className="card-text">Rp. 2.000.000,-</p>
                                                    <p className="card-text">Level : Easy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="products-thumbnail">
                                <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-5" style={{ backgroundImage: `url(${steak_panggang})` }}>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Steak Panggang</h5>
                                <p className="card-text">Rp. 2.000.000,-</p>
                                <p className="card-text">Level : Easy </p>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-5"
                                    className="btn btn-primary">Preview</button>
                            </div>
                        </div>
                        <div className="modal fade" id="modalProducts-5" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Steak Panggang</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="modal-thumbnail">
                                                    <div className="products-image" style={{ backgroundImage: `url(${steak_panggang})` }}>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Steak Panggang</h5>
                                                    <p className="card-text">Rp. 2.000.000,-</p>
                                                    <p className="card-text">Level : Easy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
