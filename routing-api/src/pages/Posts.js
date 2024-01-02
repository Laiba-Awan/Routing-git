import React, { useEffect, useState } from "react";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Container,
  Col,
} from "reactstrap";

function Posts() {
  const [PostsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((value) => value.json())
      .then((value) => {
        setLoading(false);
        setPostsData(value);
        console.log("value", value);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <Container fluid>
      <h2 className="text-center">Posts</h2>
      {loading ? <Spinner color="warning"></Spinner> : null}
      <Row>
        {PostsData.map((item, index) => (
          <Col key={`${index}`} xs="12" sm="4">
            <Card>
              <img
                className="image"
                alt="Sample"
                src={`https://picsum.photos/300/20${index}`}
              />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardText>{item.body}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Posts;
