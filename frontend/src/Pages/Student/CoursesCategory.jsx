import React from "react";
import CategoryCourseCard from "./CategoryCourseCard";
import { Link } from "react-router-dom";
function CoursesCategory(params) {
    const data = [
        // Your course data here
        {
            id: 1,
            img: "https://source.unsplash.com/1800x900/?course&1",
            Title: "Course1",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 2,
            img: "https://source.unsplash.com/1800x900/?course&2",
            Title: "Course2",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 3,
            img: "https://source.unsplash.com/1800x900/?course&3",
            Title: "Course3",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 4,
            img: "https://source.unsplash.com/1800x900/?course&4",
            Title: "Course4",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 1,
            img: "https://source.unsplash.com/1800x900/?course&1",
            Title: "Course1",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 2,
            img: "https://source.unsplash.com/1800x900/?course&2",
            Title: "Course2",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 3,
            img: "https://source.unsplash.com/1800x900/?course&3",
            Title: "Course3",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
        {
            id: 4,
            img: "https://source.unsplash.com/1800x900/?course&4",
            Title: "Course4",
            desc: "this is course description this is course description",
            btn: "know More &rarr;",
        },
    ];

    return (
        <div className="d-flex">
            {data.map((course) => (
                <CategoryCourseCard
                    key={course.id}
                    id={course.id}
                    img={course.img}
                    title={course.Title}
                    desc={course.desc}
                />
            ))}
        </div>
    );
}

export default CoursesCategory;
