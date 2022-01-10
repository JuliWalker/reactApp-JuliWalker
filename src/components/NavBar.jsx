import react from "react"
import CartWidgetContainer from './NavBarComponents/CartWidget'

export default function NavBar() {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Juli Walker React proyect</a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Second Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Third Page</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidgetContainer />
                </div>
            </nav>
        </>
    )

}