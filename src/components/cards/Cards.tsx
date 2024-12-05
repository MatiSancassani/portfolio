import './cardStyle.css'

import { FaRegEye, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
const Cards = () => {
    return (
        <div className='cards'>
            <div className="proyectosContainer">
                <div className="cardsContainer">
                    <div className="card">
                        <img className='cardImage' src="../img/project1.png" alt="" />
                    </div>
                </div>
                <div className="card_info">
                    <div>
                        <h2>BigBurger - En desarrollo</h2>
                    </div>
                    <div className="descripcion">
                        <p>Pagina web para la venta de hamburguesas, con una interfaz intuitiva y un diseño atractivo para el usuario, posee un diseño responsive para adaptarse a diferentes dispositivos y plataformas. <br /> <br />Al final del desarrollo, se espera poder tener un sistema de login con administacion de usuarios y sus respectivos roles (Admin y user), asi como un sistema de carrito de compras con id unico para cada usuario. El admin podra agregar, editar y eliminar productos, y el user podra ver los productos disponibles y agregarlos al carrito. <br /> <br />El proyecto utilizara el stack MERN, actualmente se encuentra en desarrollo.</p>


                    </div>
                    <p className='description_p'>Tecnologias utilizadas:</p>
                    <div className="tecnologies_container">
                        <ul className="tecnologies_ul">
                            <li>
                                <p><FaReact /> ReactJS</p>
                            </li>
                            <li>
                                <p><IoLogoJavascript /> Javascript</p>
                            </li>
                            <li>
                                <p><RiTailwindCssFill /> TailwindCSS</p>
                            </li>
                        </ul>
                    </div>
                    <div className='buttons_container'>
                        <button className="view_button">
                            <FaRegEye /> Ver proyecto
                        </button>
                        <button className="view_button">
                            <a href="https://github.com/MatiSancassani/vikinga">
                                <FaGithub />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="proyectosContainer">
                <div className="cardsContainer">
                    <div className="card">
                        <img className='cardImage' src="../img/project2.png" alt="" />
                    </div>
                </div>
                <div className="card_info">
                    <div>
                        <h2>Vikinga Store</h2>
                    </div>
                    <div className="descripcion">
                        <p>Ecommerce para una tienda de ropa, esta tienda fue creada con el fin de ofrecer un espacio donde los usuarios puedan comprar sus productos via online. Este proyecto fue creado como base para luego ofrecer un sistema de login/register para poder gestionar sus pedidos, a su vez con un sistema de carrito de compras para luego almacenar todos su informacion en una base de datos.</p>
                    </div>
                    <p className='description_p'>Tecnologias utilizadas:</p>
                    <div className="tecnologies_container">

                        <ul className="tecnologies_ul">
                            <li>
                                <p><FaHtml5 /> HTML</p>
                            </li>
                            <li>
                                <p><FaCss3Alt /> CSS</p>
                            </li>
                            <li>
                                <p><IoLogoJavascript /> Javascript</p>
                            </li>
                            <li>
                                <p><FaBootstrap /> Bootstrap</p>
                            </li>
                        </ul>
                    </div>
                    <div className='buttons_container'>
                        <button className="view_button">
                            <a href="https://matisancassani.github.io/vikinga/" target='_blank'>
                                <FaRegEye />Ver proyecto
                            </a>
                        </button>
                        <button className="view_button">
                            <a href="https://github.com/MatiSancassani/vikinga" target='_blank'>
                                <FaGithub />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="proyectosContainer">
                <div className="cardsContainer">
                    <div className="card">
                        <img className='cardImage' src="../img/project3.png" alt="" />
                    </div>
                </div>
                <div className="card_info">
                    <div>
                        <h2>Parada Vip Drugstore</h2>
                    </div>
                    <div className="descripcion">
                        <p>Ecommerce sobre un negocio familiar, el cual aplica conceptos sobre agregar productos al carrito, manejar stock, filtrar productos por categoria, etc. <br /> Se realizo con el fin del practicar conceptos basicos de Javascript, como por ejemplo: funciones, condicionales, bucles, utilizar localStorage, etc.</p>
                    </div>
                    <p className='description_p'>Tecnologias utilizadas:</p>
                    <div className="tecnologies_container">

                        <ul className="tecnologies_ul">
                            <li>
                                <p><FaHtml5 /> HTML</p>
                            </li>
                            <li>
                                <p><FaCss3Alt /> CSS</p>
                            </li>
                            <li>
                                <p><IoLogoJavascript /> Javascript</p>
                            </li>
                        </ul>
                    </div>
                    <div className='buttons_container'>
                        <button className="view_button">
                            <a href="https://matisancassani.github.io/paradavip/" target='_blank'>
                                <FaRegEye />Ver proyecto
                            </a>
                        </button>
                        <button className="view_button">
                            <a href="https://github.com/MatiSancassani/paradavip" target='_blank'>
                                <FaGithub />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards