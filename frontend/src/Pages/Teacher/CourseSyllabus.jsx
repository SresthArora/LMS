// ----------------------------------------------------------------------------

import React, { useState } from "react";
import Syllabus from "./Syllabus";

export default function CourseSyllabus() {
  const [faqs, setFaqs] = useState([
    {
      question: "Topic 1",
      answer: "Lorem ipsum...",
      open: false,
      isEditing: false,
    },
    {
      question: "Topic 2",
      answer: "Sub Topic 1, Sub Topic 2",
      open: false,
      isEditing: false,
    },
    {
      question: "Topic 3",
      answer: "This many!",
      open: false,
      isEditing: false,
    },
    // ... (other syllabus items)
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  const toggleEdit = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isEditing = !faq.isEditing;
        }
        return faq;
      })
    );
  };

  const handleEdit = (index, editedContent) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isEditing = false;
          faq.answer = editedContent;
        }
        return faq;
      })
    );
  };

  const handleDelete = (index) => {
    // Remove the topic from the faqs list
    const updatedFaqs = faqs.filter((faq, i) => i !== index);
    setFaqs(updatedFaqs);
    // Send a request to your API to delete the topic
    // Replace 'API_ENDPOINT' with the actual endpoint of your API
    fetch(`API_ENDPOINT/syllabus/${index}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Topic successfully deleted in the API
        } else {
          // Handle errors, e.g., show an error message
          console.error("Failed to delete topic from API");
        }
      })
      .catch((error) => {
        console.error("Error deleting topic:", error);
      });
  };

  return (
    <div className="container CourseSyllabus">
      <div className="syllabusFaq faqs text-light btn-flex">
        SYLLABUS
        <button
          className="bg-white text-dark AddContent"
          type="button"
        >
          <a href="/Teacher/AddTopic" className="text-decoration-none text-dark">
            {" "}
            Add Topic
          </a>
        </button>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Syllabus
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
            toggleEdit={toggleEdit}
            handleEdit={handleEdit}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
