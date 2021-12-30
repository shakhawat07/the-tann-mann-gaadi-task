import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './CourseDetails.css';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [videos, setVideos] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);
    // console.log(videos);
    // console.log(typeof courseId);
    return (
        <div>
            {!isLoading &&
                videos.filter(video => video.id === courseId).map(filtered =>
                (
                    < div className="container-fluid" key={filtered}>
                        <div className="row courseDetails-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center mt-5 p-0">
                                <div className="" style={{ paddingBottom: '56.25%', position: 'relative', display: 'block', width: '75%' }}>
                                    <iframe width="100%" height="90%" src={filtered.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0' }}></iframe>
                                </div>
                                <h4 className="fw-5 text-dark course-name mx-3 text-center mb-3">{filtered.name}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
            {isLoading && <Spinner animation="border" variant="danger" />}
        </div>
    );
};

export default CourseDetails;