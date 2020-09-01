import React from "react";
import TextField from "./TextField";

type FormData = {
  url?: string;
  text?: string;
  tags?: string[];
};

const EventForm: React.FC = () => {
  return (<div><TextField text='Something'/></div>);
}

export default EventForm
