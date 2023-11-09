// function Student(props) {
//   return (
//     <li className="list-group-item">
//       {props.name}{" "}
//       <button className="btn btn-sm float-end bgcolor">
//         <a href="/Teacher/ChatPage" className="text-decoration-none text-white">
//           Message
//         </a>
//       </button>
//     </li>
//   );
// }

// export default Student;
// function Student(props) {
//   return (
//     <li className="list-group-item">
//       {props.name}{" "}
//       <button className="btn btn-sm float-end bgcolor">
//         <a
//           href="/Teacher/ChatPage"
//           className="text-decoration-none text-white fixed-size"
//         >
//           Remove
//         </a>
//       </button>
//     </li>
//   );
// }
 
// export default Student;
 
// ------------------------------------
import React from "react";
 
function Student(props) {
  return (
    <li className="list-group-item">
      {props.name}
      <button className="btn btn-sm float-end bgcolor" onClick={props.onRemove}>
        Remove
      </button>
    </li>
  );
}
 
export default Student;
 