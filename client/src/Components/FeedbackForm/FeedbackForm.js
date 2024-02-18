import React, { useState } from "react";
import "../../Styles/FeedbackForm.css";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    visitDate: "",
    doctorName: "",
    rating: 0,
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass feedback data to parent component for submission
    onSubmit(feedback);
    // Clear the form after submission
    setFeedback({
      name: "",
      email: "",
      visitDate: "",
      doctorName: "",
      rating: 0,
      comments: ""
    });
  };

  return (
    <div className="feedback-form-container">
      <h2 className="form-heading">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate" className="bold">Visit Date:</label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={feedback.visitDate}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName" className="bold">Doctor's Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={feedback.doctorName}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Enter doctor's name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating" className="bold">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select rating</option>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments" className="bold">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Enter your comments"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;