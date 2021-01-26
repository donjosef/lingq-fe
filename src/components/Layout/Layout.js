import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useCategory } from '../../Context/CategoryContext'
import './Layout.css'

const Layout = (props) => {
    const inputRef = useRef()
    const history = useHistory()
    const { onChangeCategory } = useCategory()

    const getCourses = (e) => {
        e.preventDefault()
        const categoryValue = inputRef.current.value
        if(categoryValue) {
            onChangeCategory(categoryValue)
            history.push('/courses/' + categoryValue)

            inputRef.current.value = ""
        }
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand text-info" href="#">LINGQ PRO</a>

                <form className="form-inline navbar__form" onSubmit={getCourses}>
                    <input ref={inputRef} className="form-control mr-sm-2" type="search" placeholder="Search courses" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Go</button>
                </form>
            </nav>
            {props.children}
            <footer className="bg-light mt-3 pt-5 pb-5 pl-3 pr-3">
                <div className="row justify-content-end mb-3">
                    <a className="pr-4" href="#top">Go to top</a>
                </div>
                <p>This site is intended to improving the messy UI of LingQ, only for practice purposes. All rights belong to <a href="https://lingq.com">LingQ.com</a></p>
                <p>Made by <a href="https://github.com/donjosef" target="_blank">Giuseppe Montanaro</a></p>
                <p>Built with <a href="https://getbootstrap.com/">Bootstrap</a>, <a href="https://bootswatch.com/simplex/">Bootswatch</a> and <a href="https://reactjs.org/">React</a>
                </p>
            </footer>
        </>
    )
}

export default Layout