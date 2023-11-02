import React, { useState } from "react";
import CourseSyllabus from "./CourseSyllabus";
import axios from "axios"; // Import Axios or any other HTTP client library you prefer
 
function CategoryCourseDescription(props) {
  const [buttonText, setButtonText] = useState("Enroll Now");
 
  const handleButtonClick = () => {
    // Display a confirmation popup
    const confirmation = window.confirm(
      "Do you want to enroll in this course?"
    );
 
    if (confirmation) {
      // Make a POST request to your backend to enroll the student
      axios
        .post("/api/enroll", { courseId: props.courseId }) // Adjust the API endpoint and data as needed
        .then((response) => {
          if (response.status === 200) {
            setButtonText("Enrolled"); // Update the button text to indicate successful enrollment
          }
        })
        .catch((error) => {
          alert("Enrollment failed:", error);
        });
    }
  };
 
  return (
    <div className="category_course_dis">
      <div className="container mt-4 courseDes-Container">
        <div className="CourseDescription category_course_dis">
          {/* course img  */}
          <div className="col-4 CategorycourseDes-img-container">
            <img
              src="https://source.unsplash.com/1800x1800/?books"
              className="CategorycourseDes-img"
              alt="..."
            />
          </div>
          {/* course title & description */}
          <div className="col-8 courseDes-text">
            <h3>{props.title}</h3>
            <p style={{ width: "80%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="fw-bold">
              Created By :
              <a
                href="/Student/TeacherProfile"
                className="text-decoration-none text-dark"
              >
                TeacherName
              </a>
            </p>
            <p className="fw-bold">Start Date : date</p>
            <p className="fw-bold">End Date : date</p>
            <p className="fw-bold">
              <a
                href="/Student/Quiz"
                className="text-decoration-none text-dark"
              >
                Quiz
              </a>
            </p>
 
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
              onClick={handleButtonClick}
            >
              <a href="#" className="text-decoration-none text-white" target="">
                {buttonText}
              </a>
            </button>
          </div>
        </div>
      </div>
      <CourseSyllabus />
    </div>
  );
}
 
export default CategoryCourseDescription;