import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Section = (object) => {
    return (object.meals.map((elem2, index2) => {
        return (<div key={elem2.id} className="meal">
                    <div className="mealdescription">
                        <span className="mealtitle">{elem2.title}</span>
                        {elem2.description && <span className="mealdetails">{elem2.description}</span>}
                        <div className="divpop">
                            <span className="mealprice">{`${elem2.price} €`}</span>
                            {elem2.popular && 
                                <>
                                    <FontAwesomeIcon icon="star" className="star"></FontAwesomeIcon>
                                    <span className="popular">Populaire</span>
                                </>
                            }
                        </div>
                    </div>
                    {elem2.picture && <img src={elem2.picture} alt={`${elem2.title} meal`} className="mealimage"/>}
                </div>)}))
}

const Menu = (array) => {
    return(
        array.map((elem, index) => {
            if(elem.meals.length > 0) {
                return (
                    <div key={index} className="category">
                        <div className="categorytitle">{elem.name}</div>
                        {Section(elem)}
                    </div>
                )
            } else {
                return <></>
            }
        })
    )
}

export default Menu;