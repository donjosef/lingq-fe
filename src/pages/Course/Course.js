import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import CourseDetails from '../../components/CourseDetails/CourseDetails'
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
            <section className="row align-items-start">
                <section className="row col-8 course__left">
                    {course.lessons && course.lessons.map(lesson => (
                        <Card key={lesson.contentId} data={lesson} type="lesson" onBtnClick={() => { }} />
                    ))}
                </section>
                <section className="ml-3 col-4 course__right">
                    <CourseDetails course={course} />
                </section>
            </section>
        </main>
    )
}

export default Course
