import { NavLink } from 'react-router-dom';

export default function ItemUnico({ item }) {

    const linkString = '/itemsdDetail/' + item.id;

    return (
        <>
            <div className='col-12 col-lg-4 col-sm-6 col-xxl-3'>
                <div className="card my-2 mx-auto" style={{ width: 18 + 'rem' }}>
                    <img src={item.pictureURL} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <NavLink className="btn btn-primary" to={linkString}>Item Detail</NavLink>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Precio: {item.price}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}