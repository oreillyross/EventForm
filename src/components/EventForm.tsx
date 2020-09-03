import React from "react";
import { Formik } from "formik";
import "./EventForm.css";
import { Typeahead } from "react-bootstrap-typeahead";

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
        initialValues={{ url: "", text: "" }}
      >
        {({ values, handleSubmit, handleChange }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Url</label>
              <input
                className="inputs"
                type="text"
                placeholder="type url to article here..."
                onChange={handleChange}
                name="url"
                value={values.url}
              />
              <label>Text</label>
              <textarea
                className="inputs"
                placeholder="copy quoted text here..."
                onChange={handleChange}
                name="text"
                value={values.text}
              />
              <Typeahead
                allowNew
                id="custom-selections-example"
                multiple
                newSelectionPrefix="Add a new item: "
                options={[]}
                placeholder="Type tags..."
              />

              <button type="submit">Add event</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EventForm;
