import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";

const AxiosPost = () => {
  const data = {
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  };
  const [inputData, setInputData] = useState(data);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          placeholder="test product"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={inputData.price}
          onChange={handleChange}
          placeholder="13.5"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={inputData.description}
          onChange={handleChange}
          placeholder="lorem ipsum set"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={inputData.image}
          onChange={handleChange}
          placeholder="https://picsum/photos/200"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={inputData.category}
          onChange={handleChange}
          placeholder="electronic"
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AxiosPost;
