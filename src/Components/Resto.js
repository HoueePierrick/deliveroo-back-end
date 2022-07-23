import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";
import Basket from "./Basket";
import ImportTable from "./ImportTable"


const Resto = () => {
    const [datas, setDatas] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [categ, setCateg] = useState();
    const [basket, setBasket] = useState();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const Response = await axios.get('https://deliveroo-back-end-le-reacteur.herokuapp.com/')
                setDatas(Response.data)

                if(!categ) {
                    const Categories = Object.values(Response.data.categories)
                    setCateg(Categories)
                } 

                if(categ) {
                    let Array = ImportTable(categ)
                    if(!basket) {setBasket(Array)}
                }

                setIsLoading(false)
            } catch (error) {console.log(error.response)}
        }
        fetchData();
    }, []) // removed categ from array
    
    // A récupérer :
    // .name (titre)
    // En liste, décomposer la table .meals (avec un autre .map) 
    // Pour chaque meal, récupérer .title(titre) .description, .price (à travailler), .popular (boolean, à travailler), .picture (image)  
    
    return (
        isLoading ? <div>Votre site est en cours de chargement</div> : 
        <>
            <div className="restaurant-description">
                <div className="rest-desc-written">
                    <div className="restaurantname">{datas.restaurant.name}</div>
                    <div className="restaurantdescription">{datas.restaurant.description}</div>
                </div>
                <div className="rest-desc-img"><img src={datas.restaurant.picture} alt="To be guessed" className="cover-image"></img></div>
            </div>
            <div className="order">
                <Menu categ={categ} basket={basket} setBasket={setBasket}></Menu>
                <Basket basket={basket} setBasket={setBasket}></Basket>
            </div>
        </>
    )
}

export default Resto;