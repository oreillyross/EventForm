import React from "react";
import { Formik } from "formik";
import { Button, Form } from 'react-bootstrap'

interface Props {
  formData?: {
    url?: string;
    text?: string;
    tags?: string[];
  };
}

const EventForm: React.FC<Props> = ({ formData }) => {
  return (
    <div>
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{ url: "" }}
      >
        {({ values, handleSubmit, handleChange }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Form.Group controlId='formUrlId'>
              <Form.Label>Url</Form.Label>
              <Form.Control
                type='text'
                onChange={handleChange}
                name="url"
                value={values.url}
              />
              </Form.Group>
              <Button variant='primary' type="submit">Add event</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EventForm;
