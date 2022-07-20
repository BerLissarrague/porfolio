export default function Home() {
	return (
		<div className="container">
				<h1 >Bernardo Lissarrague</h1>
			<section className="sections">
				<div className="card  p-3 mb-5 mt-5 bg-white rounded ">
					<div className="card-body">
						<h2 className="card-title"> Informacion personal</h2>
						<ul className="card-text">
							<li>Fechade nacimiento 29/01/1990</li>
							<li>Telefono: 249-4497129</li>
							<li>E-mail: berlissarrague@gmail.com </li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sections">
				<div className="card p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h2 className="card-title">Informacion complementaria</h2>
						<ul className="card-text">
							{" "}
							<li>
								Me considero una persona proactiva, responsable y dispuesto a
								aprender.
							</li>
							<li>Autocrítico y exigente.</li>
							<li>Siempre intento mejorar en mi trabajo.</li>
							<li>Habilidad para resolver diferencias y conflictos.</li>
							<li>Me gusta el trabajo en equipo e individual.</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
