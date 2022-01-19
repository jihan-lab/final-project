import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Register = () => {


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
                <div className="row mt-5 text-center">
                    <div className="col-lg-12">
                        <h2>Silahkan Daftar</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6  mt-2">
                        <div className="card shadow">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Your Full name</label>
                                        <input type="text" className="form-control" name="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Password</label>
                                        <input type="password" className="form-control" name="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" name="conf_password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-5">Register</button>
                                </form>
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

export default Register
