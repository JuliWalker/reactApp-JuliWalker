import CartWidgetContainer from './NavBarComponents/CartWidget'
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/items/all'}>Juli Walker React proyect</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/remeras'}>Remeras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/pantalones'}>Pantalones</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/gorras'}>Gorras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/medias'}>Medias</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidgetContainer />
                </div>
            </nav>
        </>
    )

}