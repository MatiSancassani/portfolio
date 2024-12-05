
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Header = () => {
    return (
        <div className="firstPage" id="header">
            <div className="information">
                <div className="titleContainer">
                    <div className="titleName focus-in-contract" >
                        <h2>Matias <br />
                            Sancassani.
                        </h2>
                        <p className="bars"></p>
                    </div>
                    <div className="social">
                        <a href="https://github.com/MatiSancassani" target="_blank"><FaGithub className="social-icon" /></a>
                        <a href="https://www.linkedin.com/in/matisancassani" target="_blank"><FaLinkedin className="social-icon" /></a>
                        <a href="https://www.instagram.com/sanca.dev" target="_blank"><FaInstagram className="social-icon" /></a>
                    </div>
                </div>

                <img src="/img/fondo.png" alt="" />
                <div className="personalInformation">
                    <h3>- Información</h3>
                    <h4>Desarrollador web Full Stack,<br />
                        en Argentina
                    </h4>
                    <p>
                        Soy un apasionado por la programacion y el aprendizaje,<br />
                        actualmente estoy en la busqueda activa de mi primera experiencia profesional.<br />
                        Me entusiasma la idea de aplicar y expandir mis habilidades en un entorno dinámico, <br />
                        donde pueda contribuir a proyectos innovadores y aprender de un equipo experimentado
                    </p>
                    <a href="/docs/MatiasSancassani.pdf" download="MatiasSancassani.pdf">
                        <button className="buttonCV flicker-1">Descargar CV ⮞</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header