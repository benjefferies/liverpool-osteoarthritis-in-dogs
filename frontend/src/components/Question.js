import React from "react";
import { Row, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { connect } from "react-redux";
import { addQuestion } from "../actions";
import { store } from "..";

const Question = ({ dispatch, title, options, ...rest }) => {
  console.log(store.getState());
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Form>
          <FormGroup inline={true} check>
            {options.map((o, i) => (
              <Col key={"col" + o.name + i}>
                <Input
                  key={"input" + o.name + i}
                  type="radio"
                  name={o.name}
                  id={o.name}
                  value={o.value}
                  onClick={(e) => {
                    dispatch(addQuestion(o.name, [o.value]));
                    console.log(store.getState());
                  }}
                />
                <Label for={o.name} check>
                  {o.name}
                </Label>
              </Col>
            ))}
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
};

export default connect()(Question);
