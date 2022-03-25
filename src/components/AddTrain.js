import { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { TrainContext } from "../context/context";
import "../styles/admin.css";
const AddTrain = () => {
  const { addTrain } = useContext(TrainContext);
  const handelAddTrain = (e) => {
    e.preventDefault();
    addTrain();
  };
  return (
    <>
      <Container id="main-container" className="d-grid h-100">
        <Form
          id="sign-in-form"
          className="text-center p-3 w-100"
          onSubmit={handelAddTrain}
        >
          <h1 className="mb-3 fs-3 fw-normal">Add Train To the System</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Label htmlFor="basic-url">Speed</Form.Label>
            <Form.Control
              size="lg"
              placeholder="train speed"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Password"
              autoComplete="current-password"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group
            className="d-flex justify-content-center mb-4"
            controlId="remember-me"
          >
            <Form.Check label="Remember me" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" size="lg" onClick={handelAddTrain}>
              Sign in
            </Button>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022</p>
        </Form>
      </Container>
    </>
  );
};

export default AddTrain;
