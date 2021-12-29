import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);
    // console.log(videos);
    return (
        <div className="container-fluid">
            <h1 className="text-center mt-5 fw-bold">Courses <span className="text-primary">Videos</span></h1>
            <hr />
            <div className="row p-5">
                {
                    videos.map(video =>
                        <Course
                            key={video.id}
                            video={video}
                        ></Course>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;