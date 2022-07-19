export default function home() {
	return (
		<div className="container">
			<section>
				<div className="card shadow-lg p-3 mb-5 mt-2 bg-white rounded ">
					<div className="card-body">
						<h1 className="card-title">Bernardo Lissarrauge</h1>
						<p className="card-text">
							 Fechade nacimiento 29/01/1990<br />
							Telefono: 249-4497129<br />
							E-mail: berlissarrague@gmail.com <br />
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="card shadow-lg p-3 mb-5 bg-white rounded">
					<div className="card-body">
						<h2 className="card-title">Informacion complementaria</h2>
						<p className="card-text">							
								{" "}
								Me considero una persona proactiva responsable y con
								facilidad de aprendizaje. Autocrítico y exigente. <br/>
							
							 Siempre intento mejorar en mi trabajo.<br/>
							 Habilidad para resolver diferencias y conflictos.<br/>
							 Me gusta el trabajo en equipo e individual.<br/>
							 Mi hoobie es jugar al basquet y la acuarofilia<br/>
						</p>

					</div>
				</div>
			</section>
		</div>
	);
}
