import React, { useState, useEffect } from 'react'
import Select from '../../components/Select/Select'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader'
import Pagination from 'react-js-pagination'
import useSelect from '../../hooks/useSelect'
import { useHistory, useParams } from 'react-router-dom'
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [coursesLoading, setCoursesLoading] = useState(false)
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

        setCoursesLoading(true)
        fetch(`http://localhost:4000/courses/${lang}/${level}/${params.page || activePage}`)
            .then(res => res.json())
            .then(courses => {
                setCourses(courses.results)
                setCount(courses.count)
                setCoursesLoading(false)
            })
    }, [langValue, levelValue, activePage])

    const handleChangePage = (page) => {
        setActivePage(page)
        history.push('/courses/' + page)
    }

    const handleStartCourse = (pk) => {
        history.push('/course/' + pk)
    }

    return (
        <main className="container container-spacing">
            <form className="form-inline courses__controls">
                <Select type="lang" value={langValue} onChange={setLangValue} />
                <Select type="level" value={levelValue} onChange={setLevelValue} />
            </form>
            {coursesLoading ? <Loader /> : (
                <>
                    <h3 className="mt-3 mb-3">
                        <small className="text-muted">{count} courses found</small>
                    </h3>
                    <section className="row">
                        {courses.map(course => (
                            <Card
                                key={course.pk}
                                data={course}
                                type='course'
                                onBtnClick={handleStartCourse}
                            />
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
                </>
            )}
        </main>
    )
}

export default Courses