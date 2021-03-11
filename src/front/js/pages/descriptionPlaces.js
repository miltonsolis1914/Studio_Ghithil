import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionPlaces = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.locations[params.theid];

	return (
		<div className="mt-5 text-center">
			<Container>
				<Row>
					<Col xs={6} md={5}>
						<Image
							className=" w-100 h-100"
							src="https://mymodernmet.com/wp/wp-content/uploads/2019/01/studio-ghibli-theme-park-5.jpg"
							style={{
								width: "100px",
								height: "100px",
								boxShadow: "8px 6px 15px #9e9e9e"
							}}
							rounded
						/>
					</Col>
					<Col xs={6} md={4}>
						<div>
							<Card border="light" style={{ width: "40rem" }}>
								<div className="text-center">
									<Card.Header>
										<strong>{element.name}</strong>
									</Card.Header>
								</div>
								<Card.Body>
									<div className="text-center">
										<Card.Title>Temática y estética</Card.Title>
									</div>
									<Card.Text>
										<strong>
											Es claramente visible como las películas del estudio suelen girar alrededor
											de una estética y temática muy concreta . Aparte de su estética de dibujo
											con uso de colores vivos y animados; se detecta como la mayoría de las
											producciones se centran en un seguido de temas sobre los cuales el mismo
											Miyazaki ha confirmado su interés. Por ejemplo, aparece de forma recurrente
											el tema de crecer o madurar, ya que muchos de sus protagonistas se ven
											obligados a reflexionar o luchar contra las situaciones en las que se
											encuentran viéndose obligados a trabajar o a lidiar con responsabilidades de
											gran peso.
										</strong>
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
						</div>
					</Col>
				</Row>
				<hr className="border border-bottom-0.5" />
				<div className="text-dark">
					<Table responsive>
						<thead className="text-dark">
							<tr>
								<th>climate</th>
								<th>Terrain</th>
								<th>Surface Water</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-dark">
								<td>{element.climate}</td>
								<td>{element.terrain}</td>
								<td>{element.surface_water}</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div>
					<InputGroup className="col text-center w-50">
						<InputGroup.Prepend />
						<FormControl as="textarea" aria-label="With textarea" placeholder="Add some comments" />
					</InputGroup>
				</div>
				<div className="col text-center mt-5">
					<Link to="/places/home">
						<button className="btn btn-primary">Back Places</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};
