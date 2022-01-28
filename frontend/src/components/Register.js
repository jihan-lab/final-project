import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {

    // Form Validasi untuk tiap field yang kosong
    const [validated, setValidated] = useState(false);
    // Data
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const registerAccount = async(e)=>{

        const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }

            e.preventDefault();
            setValidated(true)
            await axios.post(`http://localhost:5000/createaccount`,{
                username : username,
                email:email,
                password: password
            })
            alert('Akun berhasil di daftarkan')
            setTimeout(()=>window.location.reload(),500)

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
                                <Form validated={validated} onSubmit={registerAccount}>
                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control required size="lg" value={username}
                                                    onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required size="lg" value={email}
                                                    onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control required size="lg" value={password}
                                                    onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>
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
