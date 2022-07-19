import Desarrollo from "../Components/assets/img/Desarrollo_web.png";
import Js from "../Components/assets/img/Javascript.png";
import CReact from "../Components/assets/img/React.png";
import Testing from "../Components/assets/img/Testing.jpg";
import Sql from "../Components/assets/img/Sql.jpg";
import "./cursos.css";
import { Carousel } from 'react-bootstrap';

export default function cursos() {
    return (
        <div className="container">
            <section>
                <h1> Educacion</h1>
                <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2>SECUNDARIO COMPLETO</h2>
                        <p className="card-text">Escuela de Educación Media N°1 Año de egreso 2007</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="card shadow-lg p-3 mb-5 mt-2 bg-white rounded">
                    <div className="card-body">
                        <h2>UNIVERSIDAD FASTA</h2>
                        <p className="card-text"> Martillero y Corredor Público Estudios incompletos hasta
                            2012 - Restan 6 materias</p>
                    </div>
                </div>

            </section>
            <section>
                <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2> CIBUM Instituto de Arte Culinario</h2>
                        <p className="card-text">   Diplomado de arte culinario. Carrera finalizada en
                            tiempo y forma. 2012 a 2014</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2>Coderhose</h2>
                        <p className="card-text">    {" "}
                            Desarrollador Full-stack. Cursos finalizados:{" "}<br />
                            JavaScript<br />
                            ReactJs<br />
                            Desarrollo Web<br />
                            Cursando: Back end.
                        </p>
                    </div>
                </div>
                <Carousel className='carousel' >

                    <Carousel.Item>
                        <img
                            className="w-70"
                            src={Js}
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-70 " src={Desarrollo} alt='imagenCarrousel' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-70 "
                            src={CReact}
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h2>Udemy</h2>
                    <p className="card-text">                       
                            {" "}
                            Todo sobre Testing y Debugging de Software Desde 0 a
                            experto. <br />
                        SQL: Consultas básicas a complejas<br/>                        
                        Java desde las bases con Apache Netbeans y Java 13 -
                            (curso de 17 hs).                       
                    </p>
                </div>
            </div>
            <section>
                <Carousel className='carousel' >
                    <Carousel.Item>
                        <img
                            className="d-block w-70"
                            src={Sql}
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-70 "
                            src={Testing}
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
}
