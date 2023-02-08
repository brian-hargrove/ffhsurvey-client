import React, { useState } from "react";
import { Table, FormGroup, Button, Input, Form, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/QuestionOne.css";

const PreConfSurvey = (props) => {
  const [Q1A, setQ1A] = useState("");
  const [Q1B, setQ1B] = useState("");
  const [Q1C, setQ1C] = useState("");
  const [Q1D, setQ1D] = useState("");
  const [Q1E, setQ1E] = useState("");
  const [Q1F, setQ1F] = useState("");
  const [Q1G, setQ1G] = useState("");
  const [Q1H, setQ1H] = useState("");
  const [Q1I, setQ1I] = useState("");
  const [Q1J, setQ1J] = useState("");
  const [Q1K, setQ1K] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3A, setQ3A] = useState("");
  const [Q3B, setQ3B] = useState("");
  const [Q3C, setQ3C] = useState("");
  const [Q3D, setQ3D] = useState("");
  const [Q3E, setQ3E] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q5A, setQ5A] = useState("");
  const [Q6A, setQ6A] = useState("");
  const [Q6B, setQ6B] = useState("");
  const [Q6C, setQ6C] = useState("");
  const [Q6D, setQ6D] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");
  const [Q9A, setQ9A] = useState("");
  const [Q9B, setQ9B] = useState("");
  const [Q9C, setQ9C] = useState("");
  const [Q9D, setQ9D] = useState("");
  const [Q10A, setQ10A] = useState("");
  const [Q10B, setQ10B] = useState("");
  const [Q10C, setQ10C] = useState("");
  const [Q10D, setQ10D] = useState("");
  const [Q10E, setQ10E] = useState("");
  const [Q10F, setQ10F] = useState("");
  const [Q10G, setQ10G] = useState("");
  const [Q10H, setQ10H] = useState("");
  const [Q11, setQ11] = useState("");
  const [Q12, setQ12] = useState("");

  const resetForm = () => {
    setQ1A();
    setQ1B();
    setQ1C();
    setQ1D();
    setQ1E();
    setQ1F();
    setQ1G();
    setQ1H();
    setQ1I();
    setQ1J();
    setQ1K();
    setQ2();
    setQ3A();
    setQ3B();
    setQ3C();
    setQ3D();
    setQ3E();
    setQ4();
    setQ5();
    setQ5A();
    setQ6A();
    setQ6B();
    setQ6C();
    setQ6D();
    setQ7();
    setQ8();
    setQ9A();
    setQ9B();
    setQ9C();
    setQ9D();
    setQ10A();
    setQ10B();
    setQ10C();
    setQ10D();
    setQ10E();
    setQ10F();
    setQ10G();
    setQ10H();
    setQ11();
    setQ12();
  };

  // const resetQuestion1 = () => {
  //   Q1A();
  //   setQ1B();
  //   setQ1C();
  //   setQ1D();
  //   setQ1E();
  //   setQ1F();
  //   setQ1G();
  //   setQ1H();
  //   setQ1I();
  //   setQ1J();
  // };
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
          Q1G: Q1G,
          Q1H: Q1H,
          Q1I: Q1I,
          Q1J: Q1J,
          Q1K: Q1K,
          Q2: Q2,
          Q3A: Q3A,
          Q3B: Q3B,
          Q3C: Q3C,
          Q3D: Q3D,
          Q3E: Q3E,
          Q4: Q4,
          Q5: Q5,
          Q5A: Q5A,
          Q6A: Q6A,
          Q6B: Q6B,
          Q6C: Q6C,
          Q6D: Q6D,
          Q7: Q7,
          Q8: Q8,
          Q9A: Q9A,
          Q9B: Q9B,
          Q9C: Q9C,
          Q9D: Q9D,
          Q10A: Q10A,
          Q10B: Q10B,
          Q10C: Q10C,
          Q10D: Q10D,
          Q10E: Q10E,
          Q10F: Q10F,
          Q10G: Q10G,
          Q10H: Q10H,
          Q11: Q11,
          Q12: Q12,
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
        window.location.assign("https://familiesforhope.org/");
        alert("Survey info saved.");
      });
  };
  return (
    <div>
      <div>
        {" "}
        {/* Question 1 */}
        <p className="surveyQuestion">
          Which of the following, if any, HPE Conferences have you attended?
          (Mark all that apply)
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1A"
              value="1"
              className="question"
              onChange={(event) => setQ1A(event.target.value)}
            />
            <Label check>2002 - NIH Bethesda, MD</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1B"
              value="1"
              className="question"
              onChange={(event) => setQ1B(event.target.value)}
            />
            <Label check>2004 - NIH Bethesda, MD</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1C"
              value="1"
              className="question"
              onChange={(event) => setQ1C(event.target.value)}
            />
            <Label check>2006 - Indianapolis, IN</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1D"
              value="1"
              className="question"
              onChange={(event) => setQ1D(event.target.value)}
            />
            <Label check>2008 - Indianapolis, IN</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1E"
              value="1"
              className="question"
              onChange={(event) => setQ1E(event.target.value)}
            />
            <Label check>2010 - Bethesda, MD</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1F"
              value="1"
              className="question"
              onChange={(event) => setQ1F(event.target.value)}
            />
            <Label check>2012 - Charlotte, NC</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1G"
              value="1"
              className="question"
              onChange={(event) => setQ1G(event.target.value)}
            />
            <Label check>2014 - Dallas, TX</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1H"
              value="1"
              className="question"
              onChange={(event) => setQ1H(event.target.value)}
            />
            <Label check>2016 - Dallas, TX</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1I"
              value="1"
              className="question"
              onChange={(event) => setQ1I(event.target.value)}
            />
            <Label check>2018 - Cincinnati, OH</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="Q1J"
              value="1"
              className="question"
              onChange={(event) => setQ1J(event.target.value)}
            />
            <Label check>2022 - Cincinnati, OH</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="Q1K"
              value="1"
              className="question"
              // onClick={(event) => resetQuestion1}
              onChange={(event) => setQ1K(event.target.value)}
            />
            <Label check>Have not attended</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="questionTwo">
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <p className="surveyQuestion">
              If you have not attended, why were you not able to attend
            </p>
            <Input
              type="textarea"
              name="Q2"
              id="enterQ2"
              className="openEndBox"
              onChange={(event) => setQ2(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="questionThree">
        <p className="surveyQuestion">
          Have you planned to attend or registerd for a past conference, but
          were forced to cancel? Is so, why?
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q3A"
              value="1"
              className="question"
              onChange={(event) => setQ3A(event.target.value)}
            ></Input>
            <Label check>Family dynamics</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q3B"
              value="1"
              className="question"
              onChange={(event) => setQ3B(event.target.value)}
            ></Input>
            <Label check>Financial</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q3C"
              value="1"
              className="question"
              onChange={(event) => setQ3C(event.target.value)}
            ></Input>
            <Label check>Illiness</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q3D"
              value="1"
              className="question"
              onChange={(event) => setQ3D(event.target.value)}
            ></Input>
            <Label check>Job/work obligations</Label>
          </FormGroup>
          <FormGroup>
            <Label check>Other (Please Specify)</Label>
            <Input
              type="textarea"
              name="Q3E"
              className="question"
              onChange={(event) => setQ3E(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="questionFour">
        <p className="surveyQuestion">
          Would you participate if the conference were virtual/online
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <Input
              type="radio"
              name="Q4"
              className="question"
              value="1"
              onChange={(event) => setQ4(event.target.value)}
            ></Input>
            <Label check>Yes</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q4"
              className="question"
              value="2"
              onChange={(event) => setQ4(event.target.value)}
            ></Input>
            <Label check>No</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="questionFive">
        <p className="surveyQuestion">
          If you were to attend a conference, what is most important to you?
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="1"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>Educational sessions</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="2"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>Entertainment</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="3"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>One on One consultation with experts</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="4"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>Social interaction (Family to Family contact)</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="5"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>Location</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="radio"
              name="Q5"
              className="question"
              value="1"
              onChange={(event) => setQ5(event.target.value)}
            ></Input>
            <Label check>Other (Please Specify)</Label>
            <Input
              type="textarea"
              name="Q5A"
              className="question"
              onChange={(event) => setQ5A(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="questionSix">
        <p className="surveyQuestion">
          What technology do you have access to if viewing a virtual/online
          conference?
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q6A"
              className="question"
              value="1"
              onChange={(event) => setQ6A(event.target.value)}
            ></Input>
            <Label check>Smartphone</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q6B"
              className="question"
              value="1"
              onChange={(event) => setQ6B(event.target.value)}
            ></Input>
            <Label check>Tablet</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q6C"
              className="question"
              value="1"
              onChange={(event) => setQ6C(event.target.value)}
            ></Input>
            <Label check>Laptop</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              name="Q6D"
              className="question"
              value="1"
              onChange={(event) => setQ6D(event.target.value)}
            ></Input>
            <Label check>PC/Desktop Computer</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="questionSeven">
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <p className="surveyQuestion">What is your home zip code?</p>
            <Input
              type="textarea"
              name="Q7"
              id="enterQ7"
              className="openEndBox"
              onChange={(event) => setQ7(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="questionEight">
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <p className="surveyQuestion">
              In miles, how far would you be willing/able to travel to attend an
              in-person conference?
            </p>
            <Input
              type="textarea"
              name="Q8"
              id="enterQ8"
              className="openEndBox"
              onChange={(event) => setQ8(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <div className="questionNine">
        <p className="surveyQuestion">
          How interested would you be in the following?
        </p>

        <Form onSubmit={(event) => handleSubmit(event)}>
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th>
                  Very <br></br>Interested
                </th>
                <th>
                  Somewhat <br></br>Interested
                </th>
                <th>Neither</th>
                <th>
                  Somewhat <br></br>Uninterested
                </th>
                <th>
                  Very <br></br>Uninterested
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="statement">
                  In-Person Conference
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q9A"
                    value="5"
                    className="question"
                    onChange={(event) => setQ9A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9A"
                    value="4"
                    className="question"
                    onChange={(event) => setQ9A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9A"
                    value="3"
                    className="question"
                    onChange={(event) => setQ9A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9A"
                    value="2"
                    className="question"
                    onChange={(event) => setQ9A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9A"
                    value="1"
                    className="question"
                    onChange={(event) => setQ9A(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  All Virtual/Online Conference
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q9B"
                    value="5"
                    className="question"
                    onChange={(event) => setQ9B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9B"
                    value="4"
                    className="question"
                    onChange={(event) => setQ9B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9B"
                    value="3"
                    className="question"
                    onChange={(event) => setQ9B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9B"
                    value="2"
                    className="question"
                    onChange={(event) => setQ9B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9B"
                    value="1"
                    className="question"
                    onChange={(event) => setQ9B(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Hybrid Confrence (combination of virtual and In-Person)
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q9C"
                    value="5"
                    className="question"
                    onChange={(event) => setQ9C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9C"
                    value="4"
                    className="question"
                    onChange={(event) => setQ9C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9C"
                    value="3"
                    className="question"
                    onChange={(event) => setQ9C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9C"
                    value="2"
                    className="question"
                    onChange={(event) => setQ9C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9C"
                    value="1"
                    className="question"
                    onChange={(event) => setQ9C(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Educational sessions provided virtually
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q9D"
                    value="5"
                    className="question"
                    onChange={(event) => setQ9D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9D"
                    value="4"
                    className="question"
                    onChange={(event) => setQ9D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9D"
                    value="3"
                    className="question"
                    onChange={(event) => setQ9D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9D"
                    value="2"
                    className="question"
                    onChange={(event) => setQ9D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q9D"
                    value="1"
                    className="question"
                    onChange={(event) => setQ9D(event.target.value)}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
      <div className="questionTen">
        <p className="surveyQuestion">
          How important are the following to you in a conference location?
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th>
                  Very <br></br>Important
                </th>
                <th>
                  Somewhat <br></br>Important
                </th>
                <th>Neither</th>
                <th>
                  Somewhat <br></br>Unimportant
                </th>
                <th>
                  Very <br></br>Unimportant
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="statement">
                  On Site Activities
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10A"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10A"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10A"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10A"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10A(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10A"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10A(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  On Site Meal Options
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10B"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10B"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10B"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10B"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10B(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10B"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10B(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Planned Off Site Activites (i.e. Moms Night, Dads Night)
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10C"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10C"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10C"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10C"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10C(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10C"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10C(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Off Site Meal Options
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10D"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10D"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10D"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10D"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10D(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10D"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10D(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Close proximity of airport
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10E"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10E"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10E"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10E"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10E(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10E"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10E(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Close proximity of grocery/drug stores
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10F"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10F"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10F"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10F"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10F(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10F"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10F(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Close proximity of offsite activities
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10G"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10G"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10G"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10G"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10G(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10G"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10G(event.target.value)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <th scope="row" className="statement">
                  Ability to break away and explore recreation, entertainment,
                  <br></br>
                  and fun activites with my family apart from the conference
                </th>
                <td>
                  <Input
                    type="radio"
                    name="Q10H"
                    value="5"
                    className="question"
                    onChange={(event) => setQ10H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10H"
                    value="4"
                    className="question"
                    onChange={(event) => setQ10H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10H"
                    value="3"
                    className="question"
                    onChange={(event) => setQ10H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10H"
                    value="2"
                    className="question"
                    onChange={(event) => setQ10H(event.target.value)}
                  ></Input>
                </td>
                <td>
                  <Input
                    type="radio"
                    name="Q10H"
                    value="1"
                    className="question"
                    onChange={(event) => setQ10H(event.target.value)}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
      <div className="questionEleven">
        <p className="surveyQuestion">
          At this time, how likely are you to attedn the 2024 conference{" "}
          <b>in person?</b>
        </p>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup check>
            <Input
              type="radio"
              name="Q11"
              value="1"
              className="question"
              onChange={(event) => setQ11(event.target.value)}
            />
            <Label check>Very Likely</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="Q11"
              value="1"
              className="question"
              onChange={(event) => setQ11(event.target.value)}
            />
            <Label check>Somewhat Likely</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="Q11"
              value="1"
              className="question"
              onChange={(event) => setQ11(event.target.value)}
            />
            <Label check>Undecided</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="Q11"
              value="1"
              className="question"
              onChange={(event) => setQ11(event.target.value)}
            />
            <Label check>Somewhat Unlikely</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="Q11"
              value="1"
              className="question"
              onChange={(event) => setQ11(event.target.value)}
            />
            <Label check>Very Unlikely</Label>
          </FormGroup>
        </Form>
      </div>
      <div className="questionTwelve">
        <Form onSubmit={(event) => handleSubmit(event)}>
          <FormGroup>
            <p className="surveyQuestion">
              What other comments or recommendations would you like to make
              about the 2024 conference?
            </p>
            <Input
              type="textarea"
              name="Q2"
              id="enterQ2"
              className="openEndBox"
              onChange={(event) => setQ2(event.target.value)}
            ></Input>
          </FormGroup>
        </Form>
      </div>
      <p className="submitMessage">
        Upon hitting submit you should see a message stating{" "}
        <b>
          <i>Survey info saved</i>
        </b>{" "}
        or you will be directed to the Families for Hope website. If you do not
        see this message or you are not directed to the website, please check to
        make sure all questions have an answer.
      </p>
      <Button id="buttonSurvey" type="submit">
        SUBMIT
      </Button>
    </div>
  );
};

export default PreConfSurvey;
