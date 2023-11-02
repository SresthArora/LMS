import React from "react";
import { Routes as Switch, Route, Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import CourseDashboard from "./CourseDashboard";
import Categories from "./Categories";
import CoursesCategory from "./CoursesCategory";
import CourseList from "./CourseList";
import Course from "./Course";
import NewCourse from "./NewCourse";
import AllStudents from "./AllStudents";
import ChatPage from "./ChatPage";
import TeacherProfile from "./TeacherProfile";
import CategoryCourseCard from "./CategoryCourseCard";
import CategoryCourseDescription from "./CategoryCourseDescription";
function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/CourseDashboard" element={<CourseDashboard />} />
                <Route path="/Categories" element={<Categories />} />
                <Route path="/CoursesCategory" element={<CoursesCategory />} />
                <Route path="/NewCourse" element={<NewCourse />} />
                <Route path="/CourseList" element={<CourseList />} />
                <Route path="/detail/:id" element={<Course />} />
                <Route path="/AllStudents" element={<AllStudents />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/ChatPage" element={<ChatPage />} />
                <Route path="/CategoryCourseCard" element={<CategoryCourseCard />} />
                <Route path="/CategoryCourseDescription" element={<CategoryCourseDescription />} />
                <Route path="/TeacherProfile" element={<TeacherProfile />} />
                {/* Add other routes for students here */}
                <Route path="*" element={<NotFound />} />
            </Switch>
            <Footer />
        </div>
    );
}

function NotFound() {
    return <div>Page Not Found</div>;
}

export default Main;
