import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import { useParams } from 'react-router-dom'

import './Course.css'

const Course = (props) => {
    const [course, setCourse] = useState({})
    const params = useParams()

    useEffect(() => {
        const lang = localStorage.lang

        fetch(`http://localhost:4000/course/${lang}/${params.pk}/`)
            .then(res => res.json())
            .then(course => {
                setCourse(course)
            })
    }, [])

    return (
        <main className="container container-spacing">
            <h1 className="course__title mb-5">{course.title}</h1>
            <section className="row">
                {course.lessons && course.lessons.map(lesson => (
                    <Card key={lesson.contentId} data={lesson} type="lesson" onBtnClick={() => { }} />
                ))}
            </section>
        </main>
    )
}

export default Course
