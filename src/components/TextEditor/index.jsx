import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";

// Import Froala Editor CSS files
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// Optional theme (you can skip this)
import "froala-editor/css/themes/dark.min.css";

const tags = [
  "Technology",
  "Health",
  "Travel",
  "Food",
  "Education",
  "Finance",
  "Sports",
  "Entertainment",
  "Lifestyle",
  "Science",
];

export const TextEditor = () => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Called whenever you type/change something in the editor
  const handleModelChange = (model) => {
    setContent(model);
  };

  // Function to send a POST request with the editor content
  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log(content);
    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // or 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ content: content }), // send the HTML content as JSON
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
        <label for="inputTitleOfPost" className="col-sm-2 col-form-label">
          Title of Post
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputTitleOfPost" />
        </div>
      </div>
      <div className="row mb-3">
        <label for="inputWriter" className="col-sm-2 col-form-label">
          Writer
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputWriter" />
        </div>
      </div>

      <legend className="col-form-label col-sm-2 pt-0">Tags</legend>

      <div className="row mb-3">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="col-sm-2 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" for="gridCheck1">
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
