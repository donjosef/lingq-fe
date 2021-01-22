import React from 'react'
import './Card.css'

const Card = ({ data, onBtnClick, type }) => {
    let cardClasses = ["col-md-4", "col-sm-6", "mb-5"] //in courses there will be multiple columns
    let leftColumn = "col-12"
    let rightColumn = "col-12"

    if(type === 'lesson') {
        cardClasses = ["col-md-12", "mb-3"] //in single Course, lessons will be laid out in one column
        leftColumn = "card__left"
        rightColumn = "card__right"
    }

    return (
        <div key={data.pk} className={`card ${cardClasses.join(" ")}`}>
            <div className="row">
                <div className={leftColumn}>
                    <img src={data.imageUrl} className="card-img-top" alt={data.title} />
                </div>
                <div className={rightColumn}>
                    <div className="card-body">
                        <h5 className="card-title text-info">{data.title}</h5>
                        {type === 'course' ? (
                            <p className="card-text">Lessons: {data.lessonsCount}</p>
                        ) : (
                            <p className="card-text">
                                Duration: {Math.floor(data.duration / 60 )}:{data.duration % 60}min
                            </p>
                        )}
                        <p className="card-text">Level: {data.level}</p>
                        <p className="card-text">Difficulty: {data.difficulty}</p>
                        <button
                            onClick={() => onBtnClick(data.pk)}
                            className={`${type === 'course' && 'course__btn'} btn btn-outline-primary`}>
                            {type === 'course' ? 'START COURSE' : 'START LESSON'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card