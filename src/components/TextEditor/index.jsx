import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";

// Import Froala Editor CSS files
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// Optional theme (you can skip this)
import "froala-editor/css/themes/dark.min.css";

const tags = [
  "TECHNOLOGY",
  "HELTH",
  "TRAVEL",
  "FOOD",
  "EDUCATION",
  "FINANCE",
  "SPORTS",
  "ENTERTAINMENT",
  "LIFESTYLE",
  "SCIENCE",
];

export const TextEditor = () => {
  const [content, setContent] = useState("");
  const [checkBoxCategorys, setCheckBoxCategorys] = useState([]);
  const [metaDataPost, setMedaTadaPost] = useState({
    title: "",
    writer: "",
    logoSrc: "",
    description: "",
    htmlContent: "",
    tags: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Called whenever you type/change something in the editor
  const handleModelChange = (model) => {
    setContent(model);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckBoxCategorys([...checkBoxCategorys, value]);
    } else {
      setCheckBoxCategorys(
        checkBoxCategorys.filter((category) => category !== value)
      );
    }
  };

  const handleMetaDataPost = (e) => {
    const target = e.target;
    const newmetaDataPost = { ...metaDataPost };
    switch (target.id) {
      case "inputTitleOfPost":
        newmetaDataPost.title = target.value;
        break;
      case "inputWriter":
        newmetaDataPost.writer = target.value;
        break;
      case "inputLogoSrc":
        newmetaDataPost.logoSrc = target.value;
        break;
      case "inputDescription":
        newmetaDataPost.description = target.value;
        break;
      default:
        console.log("field not found");
    }
    setMedaTadaPost(newmetaDataPost);
  };

  // Function to send a POST request with the editor content
  const handleSubmit = async () => {
    setIsSubmitting(true);
  
    // Create a fresh object with the latest state values
    const updatedMetaDataPost = {
      ...metaDataPost,
      htmlContent: content,
      tags: checkBoxCategorys,
    };
  
    // Use this object directly instead of waiting for state to update
    const projectResult = {
      logoSrc: updatedMetaDataPost.logoSrc,
      title: updatedMetaDataPost.title,
      description: updatedMetaDataPost.description,
      post: updatedMetaDataPost,
    };
  
    try {
      const response = await fetch("http://localhost:8080/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectResult),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Success:", result);
      alert("Content submitted successfully!");
    } catch (error) {
      console.error("Error submitting content:", error);
      alert("Failed to submit content!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="row mb-3">
        <label htmlFor="inputTitleOfPost" className="col-sm-2 col-form-label">
          Title of Post
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputTitleOfPost"
            onChange={handleMetaDataPost}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputWriter" className="col-sm-2 col-form-label">
          Writer
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputWriter"
            onChange={handleMetaDataPost}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputLogoSrc" className="col-sm-2 col-form-label">
          LogoSrc
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputLogoSrc"
            onChange={handleMetaDataPost}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputDescription" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            type="text"
            className="form-control"
            id="inputDescription"
            rows="3"
            onChange={handleMetaDataPost}
          />
        </div>
      </div>

      <legend className="col-form-label col-sm-2 pt-0">Tags</legend>

      <div className="row mb-3">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="col-sm-2 offset-sm-2">
              <div className="form-check">
                <input
                  value={tag}
                  className="form-check-input"
                  type="checkbox"
                  id={`checkBox-${index}`}
                  onChange={handleCheckboxChange}
                  checked={checkBoxCategorys.includes(tag)}
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  {tag}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <h2>New Post:</h2>

      <FroalaEditor
        tag="textarea"
        model={content}
        onModelChange={handleModelChange}
        config={{
          placeholderText: "Start typing something...",
          theme: "dark",
          heightMin: 200,
          toolbarSticky: false,
          imageInsertButtons: ["imageByURL"], // Only allow inserting images by URL
          imageUpload: false, // Prevents automatic image uploads
          imagePaste: false, // Prevents pasting images as blobs
          imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
          imageEditButtons: ["imageAlign", "imageRemove"],
          imageDefaultAlign: "center", // Default image alignment
        }}
      />

      {/* The submit button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: isSubmitting ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit Content"}
      </button>

      {/* Optional: Preview the current content */}
      <h3>Preview:</h3>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
          marginTop: "10px",
          background: "#f9f9f9",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
