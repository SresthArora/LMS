// import { Routes, Route } from "react-router-dom"
// import LoginApp from './Pages/Login/LoginApp'
// import StudentApp from './Pages/Student/StudentApp'
// import TeacherApp from './Pages/Teacher/TeacherApp'
// import './App.css';

// function App() {
//     return ( 
//         <div className = "" >
//         <Routes >
//             <Route path = "/Login" element = { < LoginApp /> } /> 
//             <Route path = "/Teacher/*" element = { < TeacherApp /> } />
//             <Route path = "/Student/*" element = { < StudentApp /> } />
//         </Routes> 
//         </div>

//     );
// }

// export default App;

// ---------------------------------------------------------------------------------------


import { Routes, Route } from "react-router-dom"
import LoginApp from './Pages/Login/LoginApp'
import StudentApp from './Pages/Student/StudentApp'
import TeacherApp from './Pages/Teacher/TeacherApp'
import ForgotPassword from "./Pages/Login/ForgotPassword"
import ChangePassword from "./Pages/Login/ChangePassword"
import './App.css';

function App() {
    return ( 
        <div className = "" >
        <Routes >
            <Route path = "/Login" element = { < LoginApp /> } /> 
            <Route path = "/Teacher/*" element = { < TeacherApp /> } />
            <Route path = "/Student/*" element = { < StudentApp /> } />
            <Route path = "/forgot-password/*" element = { < ForgotPassword /> } />
            {/* <Route path="/student-change-password/:student_id" element={<ChangePassword />} />  */}
            <Route path="/change-password/:user_type/:user_id" element={< ChangePassword />} />

        </Routes> 
        </div>

    );
}

export default App;