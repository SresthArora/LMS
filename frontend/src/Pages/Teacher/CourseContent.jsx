import React, { useState } from "react";
import Video from "./Video";
function CourseContent() {
  const [videoData, setVideoData] = useState([
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=E-MqY180IOM",
      title: "TOSCA AS1",
    },
    {
      id: 2,
      link: "https://www.youtube.com/watch?v=E-MqY180IOM",
      title: "TOSCA AS1",
    },
    {
      id: 3,
      link: "https://www.youtube.com/watch?v=E-MqY180IOM",
      title: "TOSCA API",
    },
    {
      id: 4,
      link: "https://www.youtube.com/watch?v=E-MqY180IOM",
      title: "Video 4",
    },
  ]);

  const handleVideoDelete = (id) => {
    // Remove the video from videoData
    const updatedVideoData = videoData.filter((video) => video.id !== id);
    setVideoData(updatedVideoData);
    // Send a request to your API to delete the video
    // Replace 'API_ENDPOINT' with the actual endpoint of your API
    fetch(`API_ENDPOINT/videos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Video successfully deleted in the API
        } else {
          // Handle errors, e.g., show an error message
          console.error("Failed to delete video from API");
        }
      })
      .catch((error) => {
        console.error("Error deleting video:", error);
      });
  };
  return (
    <div className="card courseContent-container">
      <div className="card-header class-header-style text-white btn-flex">
        VIDEOS
        <button className="bg-white text-dark">
          <a href="/Teacher/AddVideo" className="text-decoration-none text-dark">
            Add Video
          </a>
        </button>
      </div>
      <ul className="list-group list-group-flush">
        {videoData.map((video) => (
          <Video
            link={video.link}
            title={video.title}
            id={video.id}
            onDelete={() => handleVideoDelete(video.id)}
          />
        ))}
      </ul>
    </div>
  );
}
export default CourseContent;
