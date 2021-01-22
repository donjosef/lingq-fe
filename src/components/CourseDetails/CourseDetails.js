import React from 'react'
import './CourseDetails.css'

const CourseDetails = ({ course }) => {

    return (
        <aside className="course-details">
            <div className="course-details__img-container mb-3">
                <img src={course.imageUrl} alt={course.title} />
            </div>
            <div className="course-details__body">
                <p className="course-details__description">{course.description}</p>
                {course.provider && (
                    <p>
                        <strong>Provided by: </strong>
                        {course.provider}
                    </p>
                )}
                <div className="course-details__tags">
                    <p className="tags__title"><em>Tags:</em></p>
                    {course.tags && course.tags.split(',').map((tag, ind) => (
                        <span
                            key={ind}
                            className="course-details__tag text-success mr-2 mb-2 ml-2 border-success">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default CourseDetails
