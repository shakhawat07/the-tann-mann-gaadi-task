import React from 'react';
import { useHistory } from 'react-router-dom';
import './Course.css';

const Course = ({ video }) => {
    const { id, name, img } = video;
    const history = useHistory();
    // console.log(video);

    // video style 
    const videoStyle = {
        width: '320px',
        height: '150px',
        overflow: 'hidden'
    }

    const handleShowDetails = () => {
        history.push(`/course/${id}`);
    }
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
            <div className="card h-100 shadow-lg course-container" onClick={handleShowDetails}>
                <div className="card-body course-img">
                    <img className="p-2 img-fluid" style={videoStyle} src={img} alt="" />
                    <h6 className="card-title pt-3 text-black text-center">{name}</h6>
                    {/* <p className="card-details p-2">{description}</p> */}
                </div>
            </div>
        </div >
    );
};

export default Course;