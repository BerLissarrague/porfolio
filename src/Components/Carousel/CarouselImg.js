import Desarrollo from "../../img/Desarrollo_web.png";
import Js from "../../img/Javascript.png";
import CReact from "../../img/React.png";
import Testing from "../../img/Testing.jpg";
import Sql from "../../img/Sql.jpg";
import { Carousel } from "react-bootstrap";

export default function CarouselImg() {
	return (
		<Carousel className="carousel">
			<Carousel.Item>
				<img className="w-70" src={Js} alt="imagenCarrousel" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="w-70" src={Desarrollo} alt="imagenCarrousel" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="w-70 " src={CReact} alt="imagenCarrousel" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="w-70" src={Sql} alt="imagenCarrousel" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="w-70" src={Testing} alt="imagenCarrousel" />
			</Carousel.Item>
		</Carousel>
	);
}
