import react from "react";

export default function Footer() {

    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Walkers
                                </h6>
                                <p>
                                    Walkers is an engeeniring and web development company.
                                    If you want to know more about our work follow us in our social media networks. 
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    We work with:
                                </h6>
                                <p>
                                    HTML5
                                </p>
                                <p>
                                    CSS3
                                </p>
                                <p>
                                    React
                                </p>
                                <p>
                                    Firebase
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Follow Us
                                </h6>
                                <p>
                                    <a target="_blank" href="https://www.linkedin.com/in/julián-walker-584ab523" className="text-reset">Linkedin</a>
                                </p>
                                <p>
                                    <a target="_blank" href="https://github.com/JuliWalker" className="text-reset">GitHub</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Instagram</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Facebook</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Buenos Aires, Siempreviva 123, Arg. </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    julianwalker1992@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 54 11 26215896</p>
                            </div>

                        </div>

                    </div>
                </section>
            </footer>
        </>
    )

}






