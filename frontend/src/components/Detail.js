import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail = () => {

    const [name, setName] = useState([]);
    const [rentangHarga, setRentangHarga] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setRentangHarga(response.data.rentangHarga);
        setDescription(response.data.description);
        setImage(response.data.image);
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
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-lg bawah-nav">
                <div className="row">
                    <div className="col-12 ">
                        <div className="card">
                            <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-1">
                                <img src={image} class="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{rentangHarga}</p>
                            </div>
                            <div class="p-5 mb-4 bg-light rounded-3">
                                <div class="container-fluid py-5">
                                    <h1 class="display-5 fw-bold">{name}</h1>
                                    <p class="col-md-8 fs-4">{description}</p>
                                    <Link to="/" className="btn btn-primary btn-lg my-2 mb-3">Back</Link>
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

export default Detail
