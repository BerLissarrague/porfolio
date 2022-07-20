import CarouselImg from "../Components/Carousel/CarouselImg";

export default function Cursos() {
	return (
		<div className="container">
			<h1>Educacion</h1>
			<section className="sections">
				<div className="card p-3 mb-5 mt-5 bg-white rounded">
					<div className="card-body">
						<h3>SECUNDARIO COMPLETO</h3>
						<ul className="card-text">
							<li>
								Escuela de Educación Media N°1 Año de egreso 2007
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sections">
				<div className="card p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h3>UNIVERSIDAD FASTA</h3>
						<ul className="card-text">
							<li>
								Martillero y Corredor Público Estudios incompletos
								hasta 2012 - Restan 6 materias
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sections">
				<div className="card p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h3>CIBUM Instituto de Arte Culinario</h3>
						<ul className="card-text">
							<li>
								Diplomado de arte culinario. Carrera finalizada en
								tiempo y forma. 2012 a 2014
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sections">
				<div className="card p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h3>Coderhose</h3>
						<h4>Desarrollador Full-stack</h4>
						<h5>Cursos finalizados</h5>
						<ul className="card-text">
							<li>Desarrollo Web</li>
							<li>JavaScript</li>
							<li>ReactJs</li>
						</ul>
						<h4>Cursando</h4>
						<ul className="card-text">
							<li>Back end</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sections">
				<div className="card p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h3>Udemy</h3>
						<ul className="card-text">
							<li>
								Todo sobre Testing y Debugging de software desde
								0 a experto.
							</li>
							<li>SQL: Consultas básicas a complejas</li>
							<li>
								Java desde las bases con Apache Netbeans y Java
								13 - (curso de 17 hs).
							</li>
						</ul>
					</div>
				</div>
			</section>
			<CarouselImg />
		</div>
	);
}
