import React from "react";
import { Formik } from "formik";

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
              <label>Url</label>
              <input
                type="text"
                onChange={handleChange}
                name="url"
                value={values.url}
              />

              <button type="submit">
                Add event
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EventForm;
