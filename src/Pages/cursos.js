/* eslint-disable jsx-a11y/alt-text */
import Desarrollo from '../Components/assets/img/Desarrollo_web.png';
import Js from '../Components/assets/img/Javascript.png';
import CReact from '../Components/assets/img/React.png'
import Testing from '../Components/assets/img/Testing.jpg';
import Sql from '../Components/assets/img/Sql.jpg';
import './cursos.css'

export default function cursos() {
    return (
        <div className="container">
            <h1> Educacion</h1>
            <div>
                <section>
                <h2>SECUNDARIO COMPLETO</h2>
                    <p>Escuela de Educación Media N°1  Año de egreso 2007</p>
                </section>

                <section>
                <h2>UNIVERSIDAD FASTA</h2>
                    <p>Martillero y Corredor Público
                        Estudios incompletos hasta 2012 - Restan 6 materias</p>
                </section>

                <section>
                <h2> CIBUM Instituto de Arte Culinario</h2>
                    <p>Diplomado de arte culinario.
                        Carrera finalizada en tiempo y forma. 2012 a 2014</p>
                </section>

                <section>
                <h2>Coderhose</h2>
                    <p> Desarrollador Full-stack.
                        Cursos finalizados: <li>Desarrollo Web</li><li>JavaScript</li><li>ReactJs</li> 
                        Cursando: Back end</p>
                    <img src={Desarrollo} />
                    <img src={Js} />
                    <img src={CReact} />

                </section>

                <h2>Udemy</h2>
                <section>
                    <ul>
                        <li>  Todo sobre Testing y Debugging de Software
                            Desde 0 a experto</li>
                        <li>SQL: Consultas básicas a complejas</li>
                        <li>Java desde las bases con Apache Netbeans y Java 13 - (curso de 17 hs)
                        </li>
                    </ul>
                    <img src={Testing} />
                    <img src={Sql} />

                </section>
            </div>
        </div>

    )
}

