import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <>

            <div className="container">
                <h2 className="logo" ><Link to="header" spy={true} smooth={true} offset={-100} duration={500}>SNK</Link></h2>
                <div className="navbar">
                    <div className="itemcontainer">
                        <ul>
                            <li><Link to="proyectos" spy={true} smooth={true} offset={-125} duration={500}>Proyectos</Link></li>
                            <li><Link to="aprendizaje-component" spy={true} smooth={true} offset={-110} duration={500}>Aprendizaje</Link></li>
                            <li>Habilidades</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar