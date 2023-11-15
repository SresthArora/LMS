import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import CourseDashboard from "./CourseDashboard";
import CourseList from "./CourseList";
import Course from "./Course";
import NewCourse from "./NewCourse";
import AllStudents from "./AllStudents";
import ChatPage from "./ChatPage";
import QuizDashboard from "./QuizDashboard";
import Quizes from "./Quizes";
import NewQuiz from "./NewQuiz";
import AddVideo from "./AddVideo";
import AddTopic from "./AddTopic";
import AddStudents from "./AddStudents";
import ResetPassword from "./ResetPassword";
import Footer from "./Footer";

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/CourseDashboard" element={<CourseDashboard />} />
        <Route path="/NewCourse" element={<NewCourse />} />
        <Route path="/CourseList" element={<CourseList />} />
        <Route path="/detail/:id" element={<Course />} />
        <Route path="/AllStudents" element={<AllStudents />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/QuizDashboard" element={<QuizDashboard />} />
        <Route path="/Quizes" element={<Quizes />} />
        <Route path="/NewQuiz" element={<NewQuiz />} />
        <Route path="/AddVideo" element={<AddVideo />} />
        <Route path="/AddStudents" element={<AddStudents />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/AddTopic" element={<AddTopic />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
