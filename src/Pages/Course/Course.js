import React from 'react';
import { useHistory } from 'react-router-dom';
import './Course.css';

const Course = ({ video }) => {
    const { id, name, description, src, img } = video;
    const history = useHistory();
    // console.log(video);

    // video style 
    const videoStyle = {
        width: '300px',
        height: '150px',
        border: '2px solid black',
        borderRadius: '15px',
        overflow: 'hidden'
    }

    const handleShowDetails = () => {
        history.push(`/course/${id}`);
    }
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
            <div className="card h-100 border border-light shadow-lg service-card-background" onClick={handleShowDetails}>
                <div className="card-body course-img">
                    {/* <iframe width="360" height="280" src={src} title="YouTube video player" frameborder="0"></iframe> */}
                    <img className="p-2 img-fluid" style={videoStyle} src={img} alt="" />
                    <h6 className="card-title pt-3 text-black text-center">{name}</h6>
                    {/* <p className="card-details p-2">{description}</p> */}
                </div>
                {/* <div className="card-footer d-flex align-items-center justify-content-center">
                    <button onClick={handleShowDetails} className="btn btn-danger px-3"
                    > <span className="px-2">Show Details</span>
                    </button>
                </div> */}
            </div>
        </div >
    );
};

export default Course;