import React, { useState, useEffect } from 'react'
import Select from '../../components/Select/Select'
import Pagination from 'react-js-pagination'
import useSelect from '../../hooks/useSelect'
import { useHistory, useParams } from 'react-router-dom'
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [count, setCount] = useState(null)
    const [activePage, setActivePage] = useState(1)
    const history = useHistory()
    const params = useParams()

    const { langValue, levelValue, setLangValue, setLevelValue } = useSelect()

    useEffect(() => {
        if (langValue) { //everytime langValue changes set new value on localstorage
            localStorage.lang = langValue
        }
        if (levelValue) { //everytime levelValue changes set new value on localstorage
            localStorage.level = levelValue
        }
        const lang = langValue || localStorage['lang']
        const level = levelValue || localStorage['level']

        fetch(`http://localhost:4000/courses/${lang}/${level}/${params.page || activePage}`)
            .then(res => res.json())
            .then(courses => {
                setCourses(courses.results)
                setCount(courses.count)
            })
    }, [langValue, levelValue, activePage])

    const handleChangePage = (page) => {
        setActivePage(page)
        history.push('/courses/' + page)
    }

    return (
        <main className="container container-spacing">
            <form className="form-inline courses__controls">
                <Select type="lang" value={langValue} onChange={setLangValue} />
                <Select type="level" value={levelValue} onChange={setLevelValue} />
            </form>
            {count && (
                <h3 className="mt-3 mb-3">
                    <small className="text-muted">{count} courses found</small>
                </h3>
            )}
            <section className="row">
                {courses.map(course => (
                    <div key={course.pk} className="card col-md-4 col-sm-6 mb-5">
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
            <section>
                <Pagination
                    activePage={activePage}
                    totalItemsCount={Math.ceil(count / 20) * 10}
                    pageRangeDisplayed={3}
                    onChange={handleChangePage}
                    prevPageText="Prev"
                    nextPageText="Next"
                    itemClass="pagination__item"
                    linkClass="text-info"
                    activeClass="pagination__item--active"
                />
            </section>
        </main>
    )
}

export default Courses