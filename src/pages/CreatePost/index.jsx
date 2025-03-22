import React from "react";
import "./style.css"; // Ensure this file contains the CSS below
import { TextEditor } from "../../components/TextEditor";
import { FormPost } from "./FormPost";

export const CreatePost = () => {
  return (
    <section className="">
      <FormPost/>
      <TextEditor/>
    </section>
  );
};
