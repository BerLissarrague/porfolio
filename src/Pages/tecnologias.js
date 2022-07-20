import ProgressBar from "react-bootstrap/ProgressBar";
export default function tecnologias() {
  return (
    <div className="container">
      <h1> Conocimiento de Tecnologias </h1>
      <div>
        <ProgressBar className="barras" striped variant="success" now={70} label="Html-css" />
        <ProgressBar className="barras" striped variant="info" now={60} label="JavaScriptl" />
        <ProgressBar className="barras" striped variant="warning" now={50} label="React" />
        <ProgressBar className="barras" striped variant="danger" now={40} label="Sql" />
        <ProgressBar className="barras" striped variant="secondary" now={30} label="Java" />
      </div>
      <h2>Experiencia con las tecnologias</h2>
      <ProgressBar className="barras"  striped variant="success" now={0} label="Html-css" />
        <ProgressBar className="barras" striped variant="info" now={0} label="JavaScriptl" />
        <ProgressBar className="barras" striped variant="warning" now={0} label="React" />
        <ProgressBar className="barras" striped variant="danger" now={0} label="Sql" />
        <ProgressBar className="barras" striped variant="secondary" now={0} label="Java" />
    </div>
  );
}
