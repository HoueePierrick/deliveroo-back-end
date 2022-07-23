import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CatalogSearch from "./CatalogSearch";
import { useState } from "react";

const isBasket = (array) => {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        result = result + array[i][3];
    }
    return result;
}

const FilteredBasket = (array) => {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i][3] > 0) {
            result.push(array[i])
        }
    }
    return result;
}

const BasketPrice = (array) => {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i][3] > 0) {
            result = result + (array[i][2] / 1) * (array[i][3] / 1)
        }
    }
    let price = Math.floor(result * 100) / 100;
    return price;
}

const FrenchPrice = (price) => {
    // let prix = Math.floor(price * 100) / 100;
    let result = price.toString().replace(".", ",")
    if(!result.includes(",")) {
        result = result + ",00"
    } else if(result[result.length - 2] === ",") {
        result = result + "0"
    }
    return result;
}

const ItemCount = (array) => {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i][3] > 0) {
            result = result + array[i][3]
        }
    }
    return result;
}

const Basket = (props) => {
    const {basket, setBasket} = props;
    const [smallClick, setSmallClick] = useState(0)
    if(basket)
    {
        if(!isBasket(basket)) {
            return (
                <div className="basket">
                    <div className="validempty">
                        <span className="validemptylarge">Valider mon panier</span>
                        <span className="validemptyshort">Voir le panier</span>
                    </div>
                    <div className="emptybasket"><span>Votre panier est vide</span></div>
                </div>
            )
        } else if(!smallClick) {
            const RealBasket = FilteredBasket(basket)
            return (
                <div className="basket">
                        <div className="validfulllarge"><span>Valider mon panier</span></div>
                        <div className="validfullshort" onClick={(event) => {setSmallClick(1)}}>
                            <div className="itemcounter"><span>{ItemCount(basket)}</span></div>
                            <span>Voir le panier</span>
                            <span>{FrenchPrice(BasketPrice(basket) + 2.50)} €</span>
                        </div>
                        <div className="itemscontainer">
                    {RealBasket.map((elem, index) => {
                        return (
                            <div className="basketitem" key={index}>
                                <div className="itemnameqty">
                                    <div className="itemqty">
                                        <FontAwesomeIcon icon="circle-minus" className="qtychange" 
                                        onClick={(event) => {setBasket(CatalogSearch(basket, elem[0], "remove"))}}></FontAwesomeIcon>
                                        <span>{elem[3]}</span>
                                        <FontAwesomeIcon icon="circle-plus" className="qtychange"
                                        onClick={(event) => {setBasket(CatalogSearch(basket, elem[0], "add"))}}></FontAwesomeIcon>
                                    </div>
                                    <div className="itemname">{elem[1]}</div>
                                </div>
                                <div className="itemprice">{FrenchPrice(elem[2])} €</div>
                            </div>
                        )
                    })}</div>
                        <div className="basketdivider"></div>
                        <div className="subtotal">
                            <span>Sous-total</span>
                            <span>{FrenchPrice(BasketPrice(basket))} €</span>
                        </div>
                        <div className="subtotal">
                            <span>Frais de livraison</span>
                            <span>2,50 €</span>
                        </div>
                        <div className="basketdivider"></div>
                        <div className="total">
                            <span>Total</span>
                            <span>{FrenchPrice(BasketPrice(basket) + 2.50)} €</span>
                        </div>
                </div>
            )
        } else if(smallClick === 1) {
            const RealBasket = FilteredBasket(basket)
            return(
                <div className="smallbasketclicked">
                    <div className="validfulllarge"><span>Valider mon panier</span></div>
                    <div className="smallclosediv">
                        <span onClick={(event) => {setSmallClick(0)}}>X</span>
                    </div>
                    <div className="itemscontainer">
                    {RealBasket.map((elem, index) => {
                        return (
                            <div className="basketitem" key={index}>
                                <div className="itemnameqty">
                                    <div className="itemqty">
                                        <FontAwesomeIcon icon="circle-minus" className="qtychange" 
                                        onClick={(event) => {setBasket(CatalogSearch(basket, elem[0], "remove"))}}></FontAwesomeIcon>
                                        <span>{elem[3]}</span>
                                        <FontAwesomeIcon icon="circle-plus" className="qtychange"
                                        onClick={(event) => {setBasket(CatalogSearch(basket, elem[0], "add"))}}></FontAwesomeIcon>
                                    </div>
                                    <div className="itemname">{elem[1]}</div>
                                </div>
                                <div className="itemprice">{FrenchPrice(elem[2])} €</div>
                            </div>
                        )
                    })}</div>
                        <div className="basketdivider"></div>
                        <div className="subtotal">
                            <span>Sous-total</span>
                            <span>{FrenchPrice(BasketPrice(basket))} €</span>
                        </div>
                        <div className="subtotal">
                            <span>Frais de livraison</span>
                            <span>2,50 €</span>
                        </div>
                        <div className="basketdivider"></div>
                        <div className="total">
                            <span>Total</span>
                            <span>{FrenchPrice(BasketPrice(basket) + 2.50)} €</span>
                        </div>
                    <div className="validfullshortclick"><span>Valider mon panier</span></div>
                </div>
            )
        }
    }
}

export default Basket;

// basket contents
    // empty
        // valider mon panier
        // mon panier est vide
    // otherwise
        // valider mon panier
        // quantity (moins et plus pour la changer => si tout est à 0 vide)
        // product name = CategExtract().meal.title
        // product price = CategExtract().meal.price
        // sous-total = SumProd
        // frais de livraison = 2,50 €
        // total = sous-total + frais de livraison

// onclick sur un produit, le rajoute ou fait qty + 1
// 1 state => array [productid, productname, productprice, qty] avec qty à 0 par défaut
// fonction for if array[i][0] = productid (index) => then qty = qty + 1 (dans la copie); setArray
// avec productid = CategExtract().meal.id

// onclick sur le + : même fonction
// onclick sur le - : fonction inverse