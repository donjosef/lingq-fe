import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import BackLink from '../../components/BackLink/BackLink'
import CourseDetails from '../../components/CourseDetails/CourseDetails'
import Loader from '../../components/Loader'
import { useHistory, useParams } from 'react-router-dom'

import { API } from '../../API'
import './Course.css'

const Course = (props) => {
    const [course, setCourse] = useState({})
    const [courseLoading, setCourseLoading] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        const lang = localStorage.lang

        API(`http://localhost:4000/course/${lang}/${params.pk}/`)
            .then(course => {
                setCourse(course)
                setCourseLoading(false)
            })
    }, [])

    const handleModal = () => {
        if (!document.body.getAttribute('style')) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.removeAttribute('style')
        }
        setIsModalVisible((visible) => !visible)
    }

    const handleStartLesson = (contentId) => {
        history.push('/lesson/' + contentId)
    }

    return (
        <main className="container container-spacing">
            <BackLink path='/courses' />
            {courseLoading ? <Loader /> : (
                <>
                    <h1 className="course__title mb-5">{course.title}</h1>
                    <button
                        className="toggle-modal btn btn-secondary mb-3"
                        onClick={handleModal}>
                        View course details
                    </button>
                    <Modal visible={isModalVisible} title={course.title} onCloseDialog={handleModal}>
                        <CourseDetails course={course} />
                    </Modal>
                    <section className="row align-items-start">
                        <section className="row col-8 course__left">
                            {course.lessons && course.lessons.map(lesson => (
                                <Card
                                    key={lesson.contentId}
                                    data={lesson}
                                    type="lesson"
                                    onBtnClick={handleStartLesson} />
                            ))}
                        </section>
                        <section className="ml-3 col-4 course__right">
                            <CourseDetails course={course} />
                        </section>
                    </section>
                </>
            )}
        </main>
    )
}

export default Course
