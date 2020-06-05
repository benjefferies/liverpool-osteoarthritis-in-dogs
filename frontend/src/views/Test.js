import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import Question from "../components/Question";

const Profile = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col sm={{ size: 2, offset: 5 }}>
          <Button color="primary" size="lg">
            Start
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Question title="In the last week, on average, how far has your dog exercised each day?" options={[{"name": "test", "description": "test", "value": 1},{"name": "test", "description": "test", "value": 1},{"name": "test", "description": "test", "value": 1},{"name": "test", "description": "test", "value": 1}]} />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
