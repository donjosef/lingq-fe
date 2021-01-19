import React, { useState, useEffect } from 'react'
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [count, setCount] = useState(null)

    useEffect(() => {
        const lang = localStorage['lang']
        const level = localStorage['level']

        fetch(`http://localhost:4000/courses/${lang}/${level}`)
            .then(res => res.json())
            .then(courses => {
                setCourses(courses.results)
                setCount(courses.count)
            })
    }, [])

    return (
        <main className="container mt-5">
            <section className="row">
                {courses.map(course => (
                    <div key={course.pk} className="card col-md-4 col-sm-6 mt-5">
                        <img src={course.imageUrl} className="card-img-top" alt={course.title} />
                        <div className="card-body">
                            <h5 className="card-title text-info">{course.title}</h5>
                            <p className="card-text">Lessons: {course.lessonsCount}</p>
                            <p className="card-text">Level: {course.level}</p>
                            <p className="card-text">Difficulty: {course.difficulty}</p>
                            <button className="card__btn btn btn-outline-primary">Start course</button>
                        </div>
                   </div>
                ))}
            </section>
        </main>
    )
}

export default Courses