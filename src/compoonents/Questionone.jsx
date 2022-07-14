import React, { useState } from "react";
import { Table, FormGroup, Button, Input, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/QuestionOne.css";

const Questionone = (props) => {
  const [Q1A, setQ1A] = useState("");
  const [Q1B, setQ1B] = useState("");
  const [Q1C, setQ1C] = useState("");
  const [Q1D, setQ1D] = useState("");
  const [Q1E, setQ1E] = useState("");
  const [Q1F, setQ1F] = useState("");
  const [Q2A, setQ2A] = useState("");
  const [Q2B, setQ2B] = useState("");
  const [Q2C, setQ2C] = useState("");
  const [Q2D, setQ2D] = useState("");
  const [Q2E, setQ2E] = useState("");
  const [Q2F, setQ2F] = useState("");
  const [Q3A, setQ3A] = useState("");
  const [Q3B, setQ3B] = useState("");
  const [Q3C, setQ3C] = useState("");
  const [Q3D, setQ3D] = useState("");
  const [Q3E, setQ3E] = useState("");
  const [Q3F, setQ3F] = useState("");
  const [Q3G, setQ3G] = useState("");
  const [Q3H, setQ3H] = useState("");
  const [Q3I, setQ3I] = useState("");
  const [Q3J, setQ3J] = useState("");
  const [Q3K, setQ3K] = useState("");
  const [Q3L, setQ3L] = useState("");
  const [Q3M, setQ3M] = useState("");
  const [Q3N, setQ3N] = useState("");
  const [Q3O, setQ3O] = useState("");
  const [Q3P, setQ3P] = useState("");
  const [Q3Q, setQ3Q] = useState("");
  const [Q3R, setQ3R] = useState("");
  const [Q3S, setQ3S] = useState("");
  const [Q3T, setQ3T] = useState("");
  const [Q3U, setQ3U] = useState("");
  const [Q3V, setQ3V] = useState("");
  const [Q3W, setQ3W] = useState("");
  const [Q3X, setQ3X] = useState("");
  const [Q3Y, setQ3Y] = useState("");
  const [Q3Z, setQ3Z] = useState("");
  const [Q3AA, setQ3AA] = useState("");
  const [Q3AB, setQ3AB] = useState("");
  const [Q4A, setQ4A] = useState("");
  const [Q4B, setQ4B] = useState("");
  const [Q4C, setQ4C] = useState("");
  const [Q4D, setQ4D] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");
  const [Q9, setQ9] = useState("");
  const [Q10, setQ10] = useState("");
  const [Q11, setQ11] = useState("");
  const [AGE, setAGE] = useState("");
  const [GENDER, setGENDER] = useState("");
  const [EDUC, setEDUC] = useState("");
  const [EMP, setEMP] = useState("");
  const [ST, setST] = useState("");
  const [ROLE, setROLE] = useState("");
  const [CONF, setCONF] = useState("");
  const [ASSIST, setASSIST] = useState("");

  const resetForm = () => {
    setQ1A();
    setQ1B();
    setQ1C();
    setQ1D();
    setQ1E();
    setQ1F();
    setQ2A();
    setQ2B();
    setQ2C();
    setQ2D();
    setQ2E();
    setQ2F();
    setQ3A();
    setQ3B();
    setQ3C();
    setQ3D();
    setQ3E();
    setQ3F();
    setQ3G();
    setQ3H();
    setQ3I();
    setQ3J();
    setQ3K();
    setQ3L();
    setQ3M();
    setQ3N();
    setQ3O();
    setQ3P();
    setQ3Q();
    setQ3R();
    setQ3S();
    setQ3T();
    setQ3U();
    setQ3V();
    setQ3W();
    setQ3X();
    setQ3Y();
    setQ3Z();
    setQ3AA();
    setQ3AB();
    setQ4A();
    setQ4B();
    setQ4C();
    setQ4D();
    setQ5();
    setQ6();
    setQ7();
    setQ8();
    setQ9();
    setQ10();
    setQ11();
    setAGE();
    setGENDER();
    setEDUC();
    setEMP();
    setST();
    setROLE();
    setCONF();
    setASSIST();
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://ffhsurvey-server.herokuapp.com/survey/create`, {
      method: "POST",
      body: JSON.stringify({
        survey: {
          Q1A: Q1A,
          Q1B: Q1B,
          Q1C: Q1C,
          Q1D: Q1D,
          Q1E: Q1E,
          Q1F: Q1F,
          Q2A: Q2A,
          Q2B: Q2B,
          Q2C: Q2C,
          Q2D: Q2D,
          Q2E: Q2E,
          Q2F: Q2F,
          Q3A: Q3A,
          Q3B: Q3B,
          Q3C: Q3C,
          Q3D: Q3D,
          Q3E: Q3E,
          Q3F: Q3F,
          Q3G: Q3G,
          Q3H: Q3H,
          Q3I: Q3I,
          Q3J: Q3J,
          Q3K: Q3K,
          Q3L: Q3L,
          Q3M: Q3M,
          Q3N: Q3N,
          Q3O: Q3O,
          Q3P: Q3P,
          Q3Q: Q3Q,
          Q3R: Q3R,
          Q3S: Q3S,
          Q3T: Q3T,
          Q3U: Q3U,
          Q3V: Q3V,
          Q3W: Q3W,
          Q3X: Q3X,
          Q3Y: Q3Y,
          Q3Z: Q3Z,
          Q3AA: Q3AA,
          Q3AB: Q3AB,
          Q4A: Q4A,
          Q4B: Q4B,
          Q4C: Q4C,
          Q4D: Q4D,
          Q5: Q5,
          Q6: Q6,
          Q7: Q7,
          Q8: Q8,
          Q9: Q9,
          Q10: Q10,
          Q11: Q11,
          AGE: AGE,
          GENDER: GENDER,
          EDUC: EDUC,
          EMP: EMP,
          STATE: ST,
          ROLE: ROLE,
          CONF: CONF,
          ASSIST: ASSIST,
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
        alert("Survey info saved.");
      });
  };
  return (
    <div>
      <div>
        {" "}
        {/* QUESTION 1 */}
        <p className="surveyQuestion">
          Thinking about your experience before coming to the conference how
          much do you agree or disagree with the following statements?
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
                    name="Q1A"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1A"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1A"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1A"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1A"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1A"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1A(event.target.value)}
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
                    name="Q1B"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1B"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1B"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1B"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1B"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1B"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1B(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  I know where I can go to get support and information about
                  HPE.
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1C"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1C(event.target.value)}
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
                    name="Q1D"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1D"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1D"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1D"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1D"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1D"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1D(event.target.value)}
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
                    name="Q1E"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1E"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1E"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1E"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1E"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1E"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1E(event.target.value)}
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
                    name="Q1F"
                    value="5"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1F"
                    value="4"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1F"
                    value="3"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1F"
                    value="2"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1F"
                    value="1"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q1F"
                    value="0"
                    className="question"
                    onChange={(event) => setQ1F(event.target.value)}
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
      {/* QUESTION 2 */}
      <div>
        <p className="surveyQuestion">
          After spending time at the conference how much do you agree or
          disagree with the following statements?
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
                  I know where I can go to get support and information about
                  HPE.
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
      <div>
        {/* QUESTION 3 */}
        <p className="surveyQuestion">
          Based on your experiences at the 2022 Conference, how would you rate
          the following aspects. If you did not participate in an activity pleas
          mark <b>Not Applicable (NA)</b>.
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th>Excellent</th>
                <th>Very Good</th>
                <th>Good</th>
                <th>Fair</th>
                <th>Poor</th>
                <th>Not Applicable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="statement">
                  Registration
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3A"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3A(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Shirt Pickup
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3B"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3B(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Families for Hope Lounge Area
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3C"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3C(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Memorial Service (Sunday Night)
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3D"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3D(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Sunday Buffet Dinner Menu
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3E"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3E(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Welcome Ceremony (Monday)
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3F"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3F(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Daily Breakfast Menu
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3G"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3G(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Vendor Fair
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3H"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3H(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Variety of Vendors
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3I"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3I(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Variety of Speakers
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3J"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3J(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Monday Lunch Menu
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3K"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3K(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Group Picture
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3L"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3L(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Mom's Night
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3M"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3M(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Mom's Night Entertainment
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3N"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3N(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Teen Trip
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3O"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3O(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Tuesday Lunch Menu
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3P"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3P(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Dad's Event
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Q"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3Q(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Movie Night (Tuesday)
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3R"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3R(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Wednesday Roundtable Discussions
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3S"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3S(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Families For Hope Roundtable
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3T"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3T(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Education Opportunities
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3U"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3U(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Child Care
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3V"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3V(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Stars of HoPE Prom
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3W"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3W(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Great Wolf Accommodations
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3X"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3X(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Opportunities to Connect with other Families
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Y"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3Y(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Silent Auction
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3Z"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3Z(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Private Family mini-photo shoots
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AA"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3AA(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Ease of getting to different activities
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="5"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="4"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="3"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="2"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="1"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q3AB"
                    value="0"
                    className="question"
                    onChange={(event) => setQ3AB(event.target.value)}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
      {/* QUESTION 4 */}
      <div>
        <p className="surveyQuestion">
          How interested would you be in the following in the future?
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th>Very Interested</th>
                <th>Somewhat Interested</th>
                <th>Neither Interested or Uninterested</th>
                <th>Somewhat Uninterested</th>
                <th>Very Uninterested</th>
                <th>Not Applicable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="statement">
                  Online Video Webinar
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="5"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="4"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="3"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="2"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="1"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4A"
                    value="0"
                    className="question"
                    onChange={(event) => setQ4A(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Download/listen to a weekly podcast
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="5"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="4"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="3"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="2"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="1"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4B"
                    value="0"
                    className="question"
                    onChange={(event) => setQ4B(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Hybrid Virtual/In Person Conference
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="5"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="4"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="3"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="2"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="1"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4C"
                    value="0"
                    className="question"
                    onChange={(event) => setQ4C(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Having skilled care for children with HPE <br></br>available
                  at conference
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="5"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="4"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="3"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="2"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="1"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q4D"
                    value="0"
                    className="question"
                    onChange={(event) => setQ4D(event.target.value)}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
      {/* QUESTION 5 */}
      <div>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <p className="surveyQuestion">
              What type of vendors would you like to see at future conferences?
            </p>
            <Input
              type="textarea"
              name="Q5"
              id="enterQ5"
              className="openEndBox"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              What did you like about this year's conference?
            </p>
            <Input
              type="textarea"
              name="Q6"
              id="enterQ6"
              className="openEndBox"
              onChange={(event) => setQ6(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              What recommendations would you suggest that could be done better
              at future conferences?
            </p>
            <Input
              type="textarea"
              name="Q7"
              id="enterQ7"
              className="openEndBox"
              onChange={(event) => setQ7(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              Where would you like to see future conferences to be held?
            </p>
            <Input
              type="textarea"
              name="Q8"
              id="enterQ8"
              className="openEndBox"
              onChange={(event) => setQ8(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              What activities would you like to see at future conferences?
            </p>
            <Input
              type="textarea"
              name="Q9"
              id="enterQ9"
              className="openEndBox"
              onChange={(event) => setQ9(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              What amenities would be useful for you at future conferences?
            </p>
            <Input
              type="textarea"
              name="Q10"
              id="enterQ10"
              className="openEndBox"
              onChange={(event) => setQ10(event.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <p className="surveyQuestion">
              What other comments do you have about the conference?
            </p>
            <Input
              type="textarea"
              name="Q11"
              id="enterQ11"
              className="openEndBox"
              onChange={(event) => setQ11(event.target.value)}
            ></Input>
          </FormGroup>
          {/* <Button id="buttonSurvey" type="submit">
            SUBMIT
          </Button> */}
        </Form>
      </div>
      {/* DEMOS */}
      <Form onSubmit={(event) => handleSubmit(event)}>
        <p className="surveyQuestion">
          The last few questins are used to group your answers.
        </p>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">What is your age?</p>
            <Input
              type="select"
              name="age"
              id="ageChoice"
              onChange={(event) => setAGE(event.target.value)}
            >
              <option>-- Age --</option>
              <option value="1">18 - 24</option>
              <option value="2">25 - 34</option>
              <option value="3">35 - 44</option>
              <option value="4">45 - 54</option>
              <option value="5">Over 55</option>
              <option value="6">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">What is your gender?</p>
            <Input
              type="select"
              name="gender"
              id="genderChoice"
              onChange={(event) => setGENDER(event.target.value)}
            >
              <option>-- Gender --</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">
              What is the highest level of school you have completed?
            </p>
            <Input
              type="select"
              name="educ"
              id="educChoice"
              onChange={(event) => setEDUC(event.target.value)}
            >
              <option>-- Level of School --</option>
              <option value="1">Less than a High School Diploma</option>
              <option value="2">High School degree or equivalent</option>
              <option value="3">Some College</option>
              <option value="4">College Degree</option>
              <option value="5">Post Graduate Degree</option>
              <option value="6">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">
              What is your current employment status?
            </p>
            <Input
              type="select"
              name="emp"
              id="empChoice"
              onChange={(event) => setEMP(event.target.value)}
            >
              <option>-- Employment --</option>
              <option value="1">Employed Full-Time (40+ hours a week)</option>
              <option value="2">
                Employed Part-Time (less than 40 hours a week)
              </option>
              <option value="3">Stay at Home Parent</option>
              <option value="4">Unemployed</option>
              <option value="5">Retired</option>
              <option value="6">Other</option>
              <option value="7">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">What is state do you live in?</p>
            <Input
              type="textarea"
              name="st"
              id="stChoice"
              onChange={(event) => setST(event.target.value)}
            ></Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">How would you describe your role?</p>
            <Input
              type="select"
              name="role"
              id="roleChoice"
              onChange={(event) => setROLE(event.target.value)}
            >
              <option>-- Role --</option>
              <option value="1">Parent</option>
              <option value="2">Sibling</option>
              <option value="3">Grandparent</option>
              <option value="4">Aunt/Uncle</option>
              <option value="5">Nurse</option>
              <option value="6">Other</option>
              <option value="7">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">
              Including this conference, how many HoPE conferences have you
              attended?
            </p>
            <Input
              type="select"
              name="conf"
              id="confChoice"
              onChange={(event) => setCONF(event.target.value)}
            >
              <option>-- Number of Conference --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Input>
          </FormGroup>
        </div>
        <div>
          <FormGroup id="demo">
            <p className="demoQuestion">
              Did you recieve assistance paying for conference registration
              fees?
            </p>
            <Input
              type="select"
              name="assit"
              id="assistChoice"
              onChange={(event) => setASSIST(event.target.value)}
            >
              <option>-- Assistance --</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Prefer not to Say</option>
            </Input>
          </FormGroup>
        </div>
        <Button id="buttonSurvey" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
};

export default Questionone;
