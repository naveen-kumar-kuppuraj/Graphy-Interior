import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import './Form.css';

const ClientsForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sucessmessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !address || !message) {
      setError("Please fill all the fields.");
      return;
    }

    const ClientsData = { name, mobile, email, address, message };

    axios.post('http://localhost:8080/ClientController/Insert', ClientsData)
      .then(response => {
        console.log(response.data);
        setSuccessMessage("Form submitted successfully!");
        setName("");
        setMobile("");
        setEmail("");
        setAddress("");
        setMessage("");
        setError("");
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        setError("Failed to submit, please try again.");
      });
  };

  return (
    <Form className="responsive-border" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="mobile">Mobile Number</Label>
        <Input
          type="tel"
          id="mobile"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="Address">Address</Label>
        <Input
          type="text"
          id="Address"
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="Message">Message</Label>
        <Input
          type="text"
          id="Message"
          placeholder="Enter your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {sucessmessage && <p style={{ color: "green" }}>{sucessmessage}</p>}
      <Button className="send">Submit</Button>
    </Form>
  );
};

export default ClientsForm;
