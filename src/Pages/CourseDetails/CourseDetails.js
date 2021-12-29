import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CourseDetails.css';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);
    // console.log(videos);
    // console.log(typeof courseId);
    return (
        <div>
            {
                videos.filter(video => video.id === courseId).map(filtered =>
                (
                    < div className="container-fluid" key={filtered}>
                        <div className="row courseDetails-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center mt-5 p-0">
                                <div className="" style={{ paddingBottom: '56.25%', position: 'relative', display: 'block', width: '75%' }}>
                                    <iframe width="100%" height="70%" src={filtered.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0' }}></iframe>
                                </div>
                                <h5 className="fw-5 m-text-dark">{filtered.name}</h5>

                                {/* <p className="w-75 mb-1 mt-2"> <span className="fw-bold">Price: </span>$ {filtered.cost}</p> */}

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CourseDetails;