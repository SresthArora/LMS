import React, { useEffect, useState } from "react";
import axios from 'axios';
const baseUrl = 'https://danville.pythonanywhere.com/api';
 
function AddVideo() {
  // Get Instructor
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "/instructor/")
      .then((response) => {
        setInstructor(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  // Get Syllabus
  const [syllabus, setSyllabus] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "/syllabus/")
      .then((response) => {
        setSyllabus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const [contentData, setContentData] = useState({
    'fk_syllabus': '',
    'contentTitle': '',
    'description': '',
    'fk_instructor': '',
    'uploadDate': '',
    'content_url': '',
    'video': '',
  });
 
  const handleChange = (event) => {
    setContentData({
      ...contentData,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleFileChange = (event) => {
    setContentData({
      ...contentData,
      [event.target.name]: event.target.files[0], // Use files[0] to capture the selected file
    });
  };
 
  const submitForm = (event) => {
    event.preventDefault();
    const contentFormData = new FormData();
    contentFormData.append("fk_syllabus", contentData.fk_syllabus);
    contentFormData.append("contentTitle", contentData.contentTitle);
    contentFormData.append("description", contentData.description);
    contentFormData.append("fk_instructor", contentData.fk_instructor);
    contentFormData.append("uploadDate", contentData.uploadDate);
    contentFormData.append("content_url", contentData.content_url);
    contentFormData.append("video", contentData.video);
 
    axios.post(baseUrl + "/content/", contentFormData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
 
  return (
    <div className="formcontainer videoQuizContainer">
      <form id="contentForm" action="#" method="POST">
        <h1>Content</h1>
        <div className="form-group">
          <label htmlFor="fk_syllabus">Syllabus:</label>
          <select name="fk_syllabus" onChange={handleChange}>
          <option value="fk_syllabus">Select a syllabus</option>
          {syllabus.map((syllabus, index) => (
          <option key={index} value={syllabus.id}>{syllabus.syllabusTitle}</option>
          ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contentTitle">Content Title:</label>
          <input onChange={handleChange} type="text" id="contentTitle" size="65" name="contentTitle" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" onChange={handleChange} id="description" size="65" name="description" required />
        </div>
        <div className="form-group">
          <label htmlFor="fk_instructor">Instructor:</label>
          <select name="fk_instructor" onChange={handleChange}>
          <option value="fk_instructor">Select a instructor</option>
          {instructor.map((instructor, index) => (
          <option key={index} value={instructor.id}>{instructor.firstName} {instructor.lastName}</option>
          ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="uploadDate">Upload Date:</label>
          <input onChange={handleChange} type="date" id="uploadDate" size="65" name="uploadDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="content_url">Content Url:</label>
          <input onChange={handleChange} type="text" id="content_url" size="65" name="content_url" required />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video:</label><br />
          <input onChange={handleFileChange} type="file" id="video" name="video" required />
        </div>
        <div className="form-group">
          <button onClick={submitForm} type="button">Submit</button>
        </div>
      </form>
    </div>
  );
}
 
export default AddVideo;