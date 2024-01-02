import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

function AlbumDetails() {
  const [loading, setLoading] = useState(false);
  const [PhotoList, setPhotoList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setPhotoList(data);
        console.log("data", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <Container fluid>
        <h2 className="text-center">Photos List</h2>
        {loading ? <Spinner color="warning"></Spinner> : null}
        <Row>
          {PhotoList.map((item, index) => (
            <Col key={`${index}`} xs="12" sm="4">
              <Card>
                <img className="image" alt="Sample" src={item.thumbnailUrl} />
                <CardBody>
                  <CardTitle tag="h5">{item.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.id}
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AlbumDetails;
