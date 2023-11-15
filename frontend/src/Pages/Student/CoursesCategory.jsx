//PAGR TO LOAD THE COURSES IN CARDS

import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import CategoryCourseCard from "./CategoryCourseCard";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

function CoursesCategory(params) {
  let { categoryId } = useParams();

  console.log({ categoryId });

  // const [categoryData, setcategoryData] = useState([]);

  // useEffect(() => {
  //   try {
  //     axios.get(baseUrl + "/category/").then((res) => {
  //       setcategoryData(res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // console.log(categoryData);

  const [courseData, setcourseData] = useState([]);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/category-courses/" + categoryId).then((res) => {
        setcourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [categoryId]);

  console.log(courseData);

  // const Data = [
  //     // Your course data here
  //     {
  //         id: 1,
  //         img: "https://source.unsplash.com/1800x900/?course&1",
  //         Title: "",
  //         desc: "",
  //         btn: "know More &rarr;",
  //     },

  // ];

  return (
    <div className="d-flex">
      {courseData.map((course, index) => (
        <CategoryCourseCard
          key={course.id}
          id={course.id}
          img="https://source.unsplash.com/1800x900/?course&1"
          title={course.courseName}
          desc={course.description}
        />
      ))}
    </div>
  );
}

export default CoursesCategory;
