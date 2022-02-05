import { useState,  useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ }) {

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [arrayProductos, setArrayProductos] = useState([]);
    const { categoria } = useParams();


    useEffect(() => {

        setLlegoPromesa(false);
        const promesaProductos = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([{ id: '1', title: 'Lompa Leopardo', description: 'pantalon con motivo de leopardo',category: 'pantalones', price: 300, pictureURL: 'https://www.duadentalcare.com/wp-content/uploads/2021/03/pantalones-selected-mujer-estampado-de-leopardo-con-elc3a1stico-pantalones-de-chc3a1ndal-croissant.jpg', stock: 10 },
                { id: '2', title: 'Medias Flama', description: 'medias con motivo de llama de fuego',category: 'medias', price: 100, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_773264-MLA42055881724_062020-O.jpg', stock: 5 },
                { id: '3', title: 'Gorra LA', description: 'gorra de beisbol de Los Angeles Angels',category: 'gorras', price: 200, pictureURL: 'https://images.footballfanatics.com/los-angeles-angels/los-angeles-angels-of-anaheim-new-era-authentic-on-field-59fifty-fitted-cap_ss4_p-11882275+u-ar96ykwhf277inej075m+v-d28380da5dee469c97b2fc7227146980.jpg?_hv=1', stock: 7 },
                { id: '4', title: 'Gorra Heat', description: 'gorra de basket de Miami Heat',category: 'gorras', price: 200, pictureURL: 'https://caphunters.com/13564-large_default/gorra-plana-negra-ajustada-59fifty-essential-de-miami-heat-nba-de-new-era.jpg', stock: 7 },
                { id: '5', title: 'Medias Arcoiris', description: 'Medias blancas con bandas de colores tipo arcoiris',category: 'medias', price: 200, pictureURL: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/029/842/products/retropoint-971-a39f5424b17899712315875694192946-640-0.jpg', stock: 7 },
                { id: '6', title: 'Remera stay positive', description: 'Remera negra con dibujo de Stay Positiv con tiburon',category: 'remeras', price: 200, pictureURL: 'https://i.ebayimg.com/images/g/80gAAOSw6qtfPTbg/s-l400.jpg', stock: 7 }]);
            }, 200)
        });

        promesaProductos
            .then((res) => {
                const arrayAux = res;
                if (categoria === 'all') {
                    setArrayProductos(arrayAux);
                } else {
                    setArrayProductos(arrayAux.filter(item => item.category === categoria));
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLlegoPromesa(true);
            })
    }, [categoria]);

    return (
        <>
            {(llegoPromesa) ?
                <>
                    <div className="container-md my-5 text-center">
                        <div className="row justify-content-evenly">
                            < ItemList arrayProductos={arrayProductos} />
                        </div>
                    </div>
                </>
                :
                <>Loading...</>
            }
        </>
    )

}