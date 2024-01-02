import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

function Albums() {
  const [AlbumsData, setAlbumsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setAlbumsData(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }, []);
  const handleClick = (id) => {
    navigate("/albumDetail/" + id);
  };

  return (
    <Container fluid>
      <h2 className="text-center">Albums List</h2>
      {loading ? <Spinner color="warning"></Spinner> : null}
      <Row>
        {AlbumsData.map((item, index) => (
          <Col key={`${index}`} xs="12" sm="4">
            <Card onClick={() => handleClick(item.id)} className="card">
              <img
                className="image"
                alt="Sample"
                src={`https://picsum.photos/300/20${index}`}
              />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Albums;
