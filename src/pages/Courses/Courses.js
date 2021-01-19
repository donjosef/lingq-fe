import React, { useState, useEffect } from 'react'
import Select from '../../components/Select/Select'
import useSelect from '../../hooks/useSelect'
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [count, setCount] = useState(null)

    const {langValue, levelValue, setLangValue, setLevelValue} = useSelect()

    useEffect(() => {
        if(langValue) { //everytime langValue changes set new value on localstorage
            localStorage.lang = langValue
        }
        if(levelValue) { //everytime levelValue changes set new value on localstorage
            localStorage.level = levelValue
        }
        const lang = langValue || localStorage['lang']
        const level = levelValue || localStorage['level']

        fetch(`http://localhost:4000/courses/${lang}/${level}`)
            .then(res => res.json())
            .then(courses => {
                setCourses(courses.results)
                setCount(courses.count)
            })
    }, [langValue, levelValue])

    return (
        <main className="container mt-5">
            <form className="form-inline courses__controls">
                <Select type="lang" value={langValue} onChange={setLangValue}/>
                <Select type="level" value={levelValue} onChange={setLevelValue}/>
            </form>
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