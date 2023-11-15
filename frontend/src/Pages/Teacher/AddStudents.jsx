// import React, { useState } from "react";
// import { Multiselect } from "multiselect-react-dropdown";

// function AddStudents() {
//   const data = [
//     { studentName: "Palak", studentID: 1 },
//     { studentName: "Shresth", studentID: 2 },
//     { studentName: "Harshita", studentID: 3 },
//     { studentName: "Saikat", studentID: 4 },
//     { studentName: "Manas", studentID: 5 },
//   ];
//   const [options] = useState(data);

//   return (
//     <div class="formcontainer">
//       <div>
//         <h1>Select Students</h1>
//         <Multiselect options={options} displayValue="studentName" />
//       </div>
//     </div>
//   );
// }
// export default AddStudents;

// ---------------------------------------------------------------------

import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function AddStudents() {
  const data = [
    { studentName: "Palak", studentID: 1 },
    { studentName: "Shresth", studentID: 2 },
    { studentName: "Harshita", studentID: 3 },
    { studentName: "Saikat", studentID: 4 },
    { studentName: "Manas", studentID: 5 },
  ];
  const [options] = useState(data);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAddStudents = () => {
    // Send a POST request to your backend API here, passing the selectedStudents data.
    // You should replace the URL with your actual backend endpoint and provide the necessary data structure.
    const baseUrl = "https://danville.pythonanywhere.com/api";
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedStudents),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Students added successfully!", data);
        // You can update the UI or show a success message here.
      })
      .catch((error) => {
        console.error("Error adding students:", error);
        // Handle errors appropriately.
      });
  };

  return (
    <div className="container">
      <div>
        <div className="AddStudentHeading">
          <h1>Select Students</h1>
        </div>
        <div className="AddStudentsContainer">
          <Multiselect
            options={options}
            displayValue="studentName"
            onSelect={(selectedList) => setSelectedStudents(selectedList)}
            onRemove={(selectedList) => setSelectedStudents(selectedList)}
            className="bg-white"
          />
        </div>

        <div className="addStudentBtn">
          <button onClick={handleAddStudents}>Add Students</button>
        </div>
      </div>
    </div>
  );
}

export default AddStudents;
