import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Edit = () => {

    const [name, setName] = useState([]);
    const [rentangHarga, setRentangHarga] = useState([]);
    const [description, setDescription] = useState([]);
    const history = useNavigate();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/products/${id}`, {
            name: name,
            rentangHarga: rentangHarga,
            description: description
        });
        history.push("/dashboard");
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setRentangHarga(response.data.rentangHarga);
        setDescription(response.data.description);
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
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-lg bawah-nav">
                <div className="row mt-5 text-center">
                    <div className="col-lg-12">
                        <h2>Edit Journal</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6  mt-2">
                        <div className="card shadow">
                            <div className="card-body">
                                <Link to="/dashboard" className="btn btn-success my-2 mb-3">Back</Link>
                                <form onSubmit={updateProduct}>
                                    <div className="mb-3">
                                        <label className="form-label">Nama Makanan</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            placeholder="Nama Makanan..."
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Kisaran Harga</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={rentangHarga}
                                            placeholder="Kisaran Harga.."
                                            onChange={(e) => setRentangHarga(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            type="number"
                                            className="form-control"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
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

export default Edit
