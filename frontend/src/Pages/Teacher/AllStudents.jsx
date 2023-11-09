 import React, { useState } from "react";
import Student from "./Student";
 
function AllStudents() {
  const [students, setStudents] = useState([
    // Your student data here
    {
      id: 1,
      studentID: 1,
      name: "Shresth Arora",
      courseID: 1,
    },
    {
      id: 2,
      studentID: 2,
      name: "Palak Gupta",
      courseID: 1,
    },
    {
      id: 3,
      studentID: 3,
      name: "Harshita",
      courseID: 1,
    },
    {
      id: 4,
      studentID: 4,
      name: "Saikat",
      courseID: 1,
    },
    {
      id: 5,
      studentID: 5,
      name: "Amarnath",
      courseID: 1,
    },
    // ... (other students)
  ]);
 
  const handleStudentRemove = (studentID) => {
    // Remove the student from students
    const updatedStudents = students.filter(
      (student) => student.studentID !== studentID
    );
    setStudents(updatedStudents);
 
    // Send a request to your API to remove the student
    // Replace 'API_ENDPOINT' with the actual endpoint of your API
    fetch(`API_ENDPOINT/students/${studentID}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Student successfully removed in the API
        } else {
          // Handle errors, e.g., show an error message
          console.error("Failed to remove student from API");
        }
      })
      .catch((error) => {
        console.error("Error removing student:", error);
      });
  };
 
  return (
    <div>
      <div className="card courseContent-container">
        <div className="card-header class-header-style text-white">
          ENROLLED STUDENTS
          <button className="btn btn-sm float-end bg-white text-dark fixed-size">
            <a
              href="/Teacher/AddStudents"
              className="text-decoration-none fixed-size"
            >
              Add Students
            </a>
          </button>
        </div>
 
        <ul className="list-group list-group-flush">
          {students.map((student) => (
            <Student
              key={student.id}
              id={student.studentID}
              name={student.name}
              onRemove={() => handleStudentRemove(student.studentID)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default AllStudents;
 