import React, { useState } from "react";

function CourseDescription(props) {
  const [buttonText, setButtonText] = useState("Add Content");
  const handleButtonClick = () => {
    // Define the functionality for the button here
    // For example, you can update state, make an API call, etc.
  };

  return (
    <div className="container mt-4 courseDes-Container">
      <div className="CourseDescription">
        {/* course img  */}
        <div className="col-4 courseDes-img-container">
          <img src={props.img} className="courseDes-img" alt="..." />
        </div>
        {/* course title & description */}
        <div className="col-8 courseDes-text">
          <h3>{props.title}</h3>
          <p style={{ width: "80%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="fw-bold">
            Created By :
            <a href="#" className="text-decoration-none text-dark">
              TeacherName
            </a>
          </p>
          <p className="fw-bold">Start Date : date</p>
          <p className="fw-bold">End Date : date</p>
          <p className="fw-bold">
            <a
              href="/Teacher/AllStudents"
              className="text-decoration-none text-dark"
            >
              Total Students : 100
            </a>
          </p>
          <p className="fw-bold">
            <a
              href="/Teacher/QuizDashboard"
              className="text-decoration-none text-dark"
            >
              Quiz
            </a>
          </p>
          <button
            style={{
              position: "absolute",
              top: "10px", // Adjust the top position as needed
              right: "10px", // Adjust the right position as needed
            }}
            onClick={handleButtonClick}
          >
            <a
              href="https://pursuitsoftwarebiz-my.sharepoint.com/:f:/g/personal/saikat_r_pursuitsoftware_biz/EjdkrYvB8sFNmTEODlsqndgB2pSCQ2TYWgTKO7ZJ3veCEA?e=yJ3UiJ"
              className="text-decoration-none text-white"
              target="_blank"
            >
              {buttonText}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDescription;
