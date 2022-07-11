import React, { useState } from "react";
import { Table, ButtonGroup, Button, Input, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/QuestionOne.css";

const Questiontwo = (props) => {
  const [Q2A, setQ2A] = useState("");
  const [Q2B, setQ2B] = useState("");
  const [Q2C, setQ2C] = useState("");
  const [Q2D, setQ2D] = useState("");
  const [Q2E, setQ2E] = useState("");
  const [Q2F, setQ2F] = useState("");

  const resetForm = () => {
    setQ2A();
    setQ2B();
    setQ2C();
    setQ2D();
    setQ2E();
    setQ2F();
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/survey/create`, {
      method: "POST",
      body: JSON.stringify({
        survey: {
          Q2A: Q2A,
          Q2B: Q2B,
          Q2C: Q2C,
          Q2D: Q2D,
          Q2E: Q2E,
          Q2F: Q2F,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resetForm();
        alert("Survey info saved");
      });
  };
  return (
    <div>
      <p>
        After spending time at the conference how much do you agree or disagree
        with the following statements?
      </p>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Table responsive striped>
          <thead>
            <tr>
              <th></th>
              <th>Strongly Agree</th>
              <th>Somewhat Agree</th>
              <th>Neither Agree of Disagree</th>
              <th>Somewhat Agree</th>
              <th>Somewhat Disagree</th>
              <th>Not Applicable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="statement">
                I have met at least 3 other families touched by HPE
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2A"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2A(event.target.value)}
                ></Input>
              </td>
            </tr>
            <tr>
              <th scope="row" className="statement">
                I believe my hope is stronger than ever.
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2B"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2B(event.target.value)}
                ></Input>
              </td>
            </tr>
            <tr>
              <th scope="row" className="statement">
                I know where I can go to get support and information about HPE.
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2C"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2C(event.target.value)}
                ></Input>
              </td>
            </tr>
            <tr>
              <th scope="row" className="statement">
                I feel comfortable discussing my child's medical concerns with
                others.
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2D"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2D(event.target.value)}
                ></Input>
              </td>
            </tr>
            <tr>
              <th scope="row" className="statement">
                I have new skills to care for my child.
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2E"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2E(event.target.value)}
                ></Input>
              </td>
            </tr>
            <tr>
              <th scope="row" className="statement">
                I have new skills to care for myself.
              </th>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="5"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="4"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="3"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="2"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="1"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
              <td>
                <Input
                  type="radio"
                  name="Q2F"
                  value="0"
                  className="question"
                  onChange={(event) => setQ2F(event.target.value)}
                ></Input>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <Button id="buttonSurvey" type="submit">
          SUBMIT
        </Button> */}
      </Form>
    </div>
  );
};

export default Questiontwo;
