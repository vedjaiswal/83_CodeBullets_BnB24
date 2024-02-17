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

  const handleRatingChange = (rating) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      rating: rating
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
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate">Visit Date:</label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={feedback.visitDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor's Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={feedback.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < feedback.rating ? "active" : ""}
                onClick={() => handleRatingChange(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
