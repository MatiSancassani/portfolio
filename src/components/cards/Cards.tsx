import './cardStyle.css'
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const Cards = () => {
    return (
        <>
            <div className="card">
                <img src="/img/paradavip.png" alt="" />
                <div className="card__content">
                    <p className="card__title">Parada Vip - Ecommerce</p>
                    <p className="card__description">• Web desarrollada con el fin de poder: <br />
                        - Administrar el stock de productos. <br />
                        - Agregar productos al carrito. <br />
                        - Finalizar compra de productos agregados.
                    </p>
                    <p className="technologysTitle">• Tecnologias utilizadas:</p>
                    <div className="technologys">
                        <div className='technologys__container'>
                            <FaHtml5 className='html' />
                            <p className='technologys__title'>HTML</p>
                        </div>
                        <div className='technologys__container'>
                            <FaCss3Alt className='css' />
                            <p className='technologys__title'>CSS</p>
                        </div>
                        <div className='technologys__container'>
                            <IoLogoJavascript className='js' />
                            <p className='technologys__title'>JAVASCRIPT</p>
                        </div>
                        <div className='technologys__container'>
                            <FaBootstrap className='bootstrap' />
                            <p className='technologys__title'>BOOTSTRAP</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards