import './certificated.css'
const Certificated = () => {
    return (
        <>

            <div className="certicatedcard">
                <div className="certicatedcard-inner">
                    <div className="certicatedcard-front">
                        <img src="src/img/desarrolloweb.png" alt="" className='certificatedImage' />
                    </div>
                    <div className="certicatedcard-back">
                        <div className="certificate">
                            <p>
                                En este curso aprendi a crear un sitio web partiendo del prototipo en papel.
                                Trabajando con HTML y CSS, implementando prácticas de versionado de código con GIT, y preprocesadores como SASS. cómo aplicar Bootstrap a mis proyectos, la importante del SEO en mis desarrollos. Por ultimo subir mi sitio a un servidor, y a interactuar con este servicio.
                            </p>
                            <div>
                                <p>Habilidades adquiridas</p>
                                <p>
                                    Prototipado y conceptos básicos de HTML -
                                    Incluyendo CSS a nuestro proyecto -
                                    CSS + Box Modeling - Flexbox -
                                    GRIDS - Pseudoclases y BEM -
                                    Frameworks CSS + Bootstrap - GIT & GITHUB - SASS - Animaciones - SEO y buenas prácticas - Servidores
                                </p>
                                <p>Inicio: 13 de Junio de 2023</p>
                                <p>Finalizacion: 17 de Agosto de 2023</p>
                            </div>
                            <div>
                                {/* <button className="certificatedButton">Ver certificado</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Certificated