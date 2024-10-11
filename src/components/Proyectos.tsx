import Cards from "./cards/Cards"

const Proyectos = () => {
    return (
        <div id="proyectos" className="secondPage">
            <div className="proyectosContainer">
                <h1>- Proyectos</h1>
                <div className="cardsContainer">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>

    )
}

export default Proyectos