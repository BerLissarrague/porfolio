import CarouselImg from "../Components/Carousel/CarouselImg";

export default function Cursos() {
    return (
        <div className="container">
            <h1 > Educacion</h1>
            <section className="sections">
                <div className="card  p-3 mb-5 mt-5 bg-white rounded">
                    <div className="card-body">
                        <h2>SECUNDARIO COMPLETO</h2>
                        <li className="card-text">
                            Escuela de Educación Media N°1 Año de egreso 2007
                        </li>
                    </div>
                </div>
            </section>
            <section className="sections">
                <div className="card  p-3 mb-5  bg-white rounded">
                    <div className="card-body">
                        <h2>UNIVERSIDAD FASTA</h2>
                        <li className="card-text">
                            {" "}
                            Martillero y Corredor Público Estudios incompletos hasta 2012 -
                            Restan 6 materias
                        </li>
                    </div>
                </div>
            </section>
            <section className="sections">
                <div className="card p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2> CIBUM Instituto de Arte Culinario</h2>
                        <li className="card-text">
                            {" "}
                            Diplomado de arte culinario. Carrera finalizada en tiempo y forma.
                            2012 a 2014
                        </li>
                    </div>
                </div>
            </section>
            <section className="sections">
                <div className="card  p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2>Coderhose</h2>
                        <h4> Desarrollador Full-stack </h4>
                        <h5>Cursos finalizados:</h5>{" "}
                        <ul className="card-text">
                            {" "}
                            <li>Desarrollo Web</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                        </ul>
                        <h4>Cursando:</h4>
                        <li>Back end</li>
                    </div>
                </div>
            </section>
            <section className="sections">
                <div className="card p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2>Udemy</h2>
                        <ul className="card-text">
                            {" "}
                            <li>
                                Todo sobre Testing y Debugging de software desde 0 a experto.{" "}
                            </li>
                            <li>SQL: Consultas básicas a complejas</li>
                            <li>
                                Java desde las bases con Apache Netbeans y Java 13 - (curso de
                                17 hs).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <CarouselImg />
        </div>
    );
}
